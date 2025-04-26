'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// IMPORTANT: Set the PDF worker source for proper rendering
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdfList = [
  { name: "Hotel Projects", url: "https://res.cloudinary.com/dh4uhkvrf/image/upload/v1745498596/sofa_mdg8oo.pdf" },
  { name: "Office Setup", url: "https://res.cloudinary.com/dh4uhkvrf/image/upload/v1745498596/sofa_mdg8oo.pdf" },
];

export default function PDFShowcase() {
  const [selectedPdf, setSelectedPdf] = useState(pdfList[0].url);
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex gap-4 mb-4 flex-wrap justify-center">
        {pdfList.map((pdf, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedPdf(pdf.url)}
            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
              selectedPdf === pdf.url ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-100'
            }`}
          >
            {pdf.name}
          </button>
        ))}
      </div>

      <div className="border p-4 bg-white shadow rounded-xl overflow-auto h-96 w-fit overflow-y-scroll">
        <Document
          file={selectedPdf}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Loading PDF...</p>}
          error={<p className="text-red-500">Failed to load PDF</p>}
        >
          {Array.from({ length: numPages }, (_, i) => (
            <Page key={i + 1} pageNumber={i + 1} width={800} />
          ))}
        </Document>
      </div>
    </div>
  );
}
