
'use client'

import { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { PDFDocument } from "pdf-lib";

import { Card } from "@/components/ui/card";

import { CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

const ExtractPDFImages = ({ pdfUrl }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const extractImagesFromPDF = async () => {
      try {
        const response = await fetch(pdfUrl);
        if (!response.ok) {
          throw new Error(`Failed to fetch PDF: ${response.statusText}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);

        const extractedImages = [];

        for (const page of pdfDoc.getPages()) {
          // Placeholder for image extraction logic
        }

        setImages(extractedImages);
        setIsLoading(false);
      } catch (err) {
        console.error("Error extracting images from PDF:", err);
        setError("Failed to extract images from PDF.");
        setIsLoading(false);
      }
    };

    extractImagesFromPDF();
  }, [pdfUrl]);

  if (isLoading) {
    return <div className="w-full h-32 bg-gray-200 animate-pulse rounded-xl" />;
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Extracted Image ${index + 1}`}
          className="w-32 h-32 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
};

const RenderPDFViewer = ({ pdfUrl }) => {
  return (
    <div className="w-full h-64 overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js`}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

const DeliveredProjectsSection = ({ deliveredProjects }) => {
  const [viewMore, setViewMore] = useState(false);

  // Slice logic for showing only the first row (3 projects)
  const displayedProjects = viewMore
    ? deliveredProjects
    : deliveredProjects.slice(0, 3);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">
            Delivered Projects Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Browse our recent successful furniture deliveries across
            hospitality, commercial, and residential spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white group"
            >
              <CardContent className="p-0">
                {/* Render the PDF Viewer */}
                <RenderPDFViewer pdfUrl={project.projectLink} />

                {/* Extract and Display Images */}
                <ExtractPDFImages pdfUrl={project.projectLink} />

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {project.projectName}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-4">
                    {project.projectDescription}
                  </p>
                  <div className="text-center">
                    <a
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="default"
                        className="w-full rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
                      >
                        View Full PDF
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {deliveredProjects.length > 3 && (
          <Button
            variant="outline"
            className="mt-8 mx-auto block bg-white text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
            onClick={() => setViewMore(!viewMore)}
          >
            {viewMore ? "View Less" : "View More"}
          </Button>
        )}
      </div>
    </section>
  );
};


export default DeliveredProjectsSection;

