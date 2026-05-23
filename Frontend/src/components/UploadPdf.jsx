export default function UploadPdf(){
    const handleFile = (e)=>{
        const file = e.target.files[0];
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