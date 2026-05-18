const express = require("express");
const router = express.Router();
const { UploadPdf } = require("controllers/pdfController");

const upload = require("../middleware/uploadMiddleware");

router.post("/upload",upload.single("pdf"),UploadPdf);

module.exports = router;