// thunder client doesn't work on this 
const express = require("express");  // import expressjs library
const cors = require("cors"); // import cors 
const app = express(); // create your server instance 
const multer = require("multer"); // multer is a nodejs middleware for handling multipart/form-data which is primarily used for uploading files 
// allows frontend to backend
const { PDFDocument, rgb } = require('pdf-lib'); // 1. Import the library at the top
const fs = require('fs').promises; // Used to read the file from your uploads folder
app.use(cors());
// allows json data handling
app.use(express.json());
// health check if server is running or not
const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "uploads/");
    },
    filename:(req, file, cb) =>{
        cb(null, Date.now() + "-" + file.originalname);
    }
});


const upload = multer({storage});   
app.post("/upload", upload.single("pdf"), (req,res)=>{
    res.json({
        message: "File uploaded successfully",
        filepath: req.file.path
    });
});
app.post("/edit-pdf", async (req, res) => {
    try {
        const { filename, textToAdd } = req.body; 
        const filePath = `./uploads/${filename}`;

        // Load the existing PDF bytes
        const existingPdfBytes = await fs.readFile(filePath);

        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        // GET the first page (or loop through them)
        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        // PERFORM AN EDIT: Draw some text
        firstPage.drawText(textToAdd || "Edited with Node.js", {
            x: 50,
            y: 700,
            size: 30,
            color: rgb(0, 0.53, 0.71),
        });

        // Serialize the PDFDocument to bytes (a Uint8Array)
        const pdfBytes = await pdfDoc.save();

        // Save the edited file (you can overwrite or create a new one)
        const editedFilename = `edited-${filename}`;
        await fs.writeFile(`./uploads/${editedFilename}`, pdfBytes);

        res.json({
            message: "PDF Edited successfully",
            url: `http://localhost:5000/files/${editedFilename}`
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to edit PDF" });
    }
});
app.use("/files",express.static("uploads"));


app.get("/",(req,res) =>{
    res.send("Server is Running ...");
});
// just a normal day
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
});