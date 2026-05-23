import {useState} from 'react';
export default function UploadPdf(){
    const [pdfFile, setPdfFile] = useState(null);
    // grab the first file user selected and console it to the browser
    const handleFile = (e)=>{
        const file = e.target.files[0];
        setPdfFile(file);
        console.log(file);
    }
    return (
        
        <div>
            <label htmlFor="pdfUpload">
                Upload PDF
            </label>
            <input 
                type='file' 
                accept=".pdf" 
                onChange={handleFile}
            />
        </div>
    )
}