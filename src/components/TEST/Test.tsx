import React, { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const DownloadDivAsPDF: React.FC = () => {
  // Reference to the div element
  const contentRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadPDF = async () => {
    if (!contentRef.current) {
      console.error("Content ref is not defined.");
      return;
    }

    try {
      // Capture the content as a canvas
      const canvas = await html2canvas(contentRef.current);

      // Convert the canvas to an image
      const imgData = canvas.toDataURL("image/png");

      // Initialize jsPDF
      const pdf = new jsPDF();

      // Define image dimensions for the PDF
      const imgWidth = 190; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);

      // Save the PDF file
      pdf.save("content.pdf");
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <div
        ref={contentRef}
        style={{
          width: "600px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f9f9f9",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1 style={{ color: "#4CAF50" }}>Download this Content</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.5" }}>
          This is a demo to download a div as a PDF along with its styles in a
          TypeScript React app.
        </p>
      </div>
      <button
        onClick={handleDownloadPDF}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Download as PDF
      </button>
    </div>
  );
};


const Puppeteer: React.FC = () => {
  const pdfContentRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    const contentHTML = pdfContentRef.current?.outerHTML;

    if (!contentHTML) return;

    // Send the HTML to the server or Puppeteer process
    const response = await fetch('http://localhost:5000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ html: contentHTML }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <div>
      <div ref={pdfContentRef} id="pdf-content" style={{ padding: '20px', fontSize: '16px', fontFamily: 'Arial' }}>
        <h1>Dynamic PDF Content</h1>
        <p>This is the content that will be included in the PDF. It is selectable!</p>
      </div>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
};

export default Puppeteer;
