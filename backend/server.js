const express = require("express");  // import expressjs library
const cors = require("cors"); // import cors 
const app = express(); // create your server instance 
const multer = require("multer"); // multer is a nodejs middleware for handling multipart/form-data which is primarily used for uploading files 
// allows frontend to backend
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

app.use("/files",express.static("uploads"));


app.get("/",(req,res) =>{
    res.send("Server is Running ...");
});

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port : ${PORT}`);
});