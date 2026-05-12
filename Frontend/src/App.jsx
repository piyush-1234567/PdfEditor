import React, { useState } from 'react';
import Toolbar from './components/Toolbar';
import PDFViewer from './components/PDFViewer';
import ExportButton from './components/ExportButton';

function App() {
  const [pdfFile, setPdfFile] = useState(null);
  const [tool, setTool] = useState('select'); // 'select', 'highlight', 'draw', 'text'

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      setPdfFile(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-slate-800 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-tight">📄 PDF EDITOR — BROWSER BASED</h1>
        <div className="flex gap-4">
          <input 
            type="file" 
            accept=".pdf" 
            onChange={handleFileUpload} 
            className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
          />
          {pdfFile && <ExportButton file={pdfFile} />}
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 flex overflow-hidden">
        {pdfFile ? (
          <>
            <Toolbar activeTool={tool} setTool={setTool} />
            <div className="flex-1 bg-gray-300 p-8 overflow-auto flex justify-center">
              <div className="shadow-2xl bg-white">
                <PDFViewer file={pdfFile} tool={tool} />
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <div className="p-10 border-4 border-dashed border-gray-400 rounded-lg text-center">
              <p className="text-lg">No PDF loaded.</p>
              <p className="text-sm">Upload a document to start annotating locally.</p>
            </div>
          </div>
        )}
      </main>

      {/* Footer / Status Bar */}
      <footer className="bg-white border-t p-2 text-xs text-gray-400 text-center">
        All processing is done locally in your browser. No data leaves your machine.
      </footer>
    </div>
  );
}

export default App;