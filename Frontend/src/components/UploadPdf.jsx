import { useState, useRef } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;
export default function UploadPdf(){
    const [pdfFile, setPdfFile] = useState(null);
    const containerRef = useRef(null);
    // grab the first file user selected and console it to the browser
    const handleFile = async (e)=>{
        const file = e.target.files[0];
        setPdfFile(file);
        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({data: arrayBuffer});
        const pdfDoc = await loadingTask.promise;

        // get first page
        containerRef.current.innerHTML = "";
        for(let i = 1; i <= pdfDoc.numPages; i++){
            const page = await pdfDoc.getPage(i);
            const canvas = document.createElement('canvas');
            const scale = 1.5;

            const viewport = page.getViewport({ scale });
            const context = canvas.getContext('2d');

            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({
                canvasContext: context,
                viewport: viewport,
            }).promise;
            containerRef.current.appendChild(canvas);
        }
        console.log("All pages rendered")
    };
        console.log("PDF Rendered");
        
    
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
            <div ref={containerRef}
            style={{border: "1px solid black"}}>
                
            </div>
        </div>
    )
}