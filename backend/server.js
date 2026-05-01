const express = require("express");  // import expressjs library
const cors = require("cors"); // import cors 
const app = express(); // create your server instance 

// allows frontend to backend
app.use(cors());
// allows json data handling
app.use(express.json());
// health check if server is running or not
app.get("/",(req,res) =>{
    res.send("Server is Running ...");
});

const PORT = 5000;
app.listen(PORT, (req,res)=>{
    console.log(`Server is running on port : ${PORT}`);
});