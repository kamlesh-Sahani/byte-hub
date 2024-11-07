import { FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";  
import { useRef } from "react";
const QuestionPaperBox = () => {
  const questionPapers = [
    {
      title: "Computer Graphics - Final Examination",
      time: "3 Hours",
      maxMarks: 100,
      sections: [
        {
          title: "Section A: Short Answer Questions (2 marks each)",
          instructions: "Answer all questions in brief",
          questions: [
            "Define computer graphics. What are its main applications?",
            "What is a pixel?",
            "Explain the difference between raster and vector graphics.",
            "Define the term 'aspect ratio.'",
            "What is meant by anti-aliasing?",
            "Describe homogeneous coordinates in computer graphics.",
            "What is a refresh rate in displays?",
            "Explain the concept of clipping in graphics.",
            "Define rendering.",
            "Name any two color models and briefly describe them.",
          ],
        },
        {
          title: "Section B: Medium Answer Questions (5 marks each)",
          instructions: "Answer any six questions",
          questions: [
            "Describe the basic components of a graphics system.",
            "Explain Bresenham’s line drawing algorithm with an example.",
            "Discuss the use of depth-buffer (Z-buffer) method for hidden surface removal.",
            "What is polygon filling? Explain the scan-line polygon filling algorithm.",
            "Describe the transformation matrix for rotation and scaling in 2D graphics.",
            "Explain the difference between orthographic and perspective projections.",
            "How does a Bezier curve work? What are its properties?",
            "Explain the concept of shading in computer graphics. Describe the Gouraud shading technique.",
          ],
        },
        {
          title: "Section C: Long Answer Questions (10 marks each)",
          instructions: "Answer any four questions",
          questions: [
            "3D Transformations: Derive the transformation matrices for translation, rotation, and scaling in 3D. Give examples of how each transformation affects a 3D object.",
            "Ray Tracing: Describe the basic principles of ray tracing. Explain how ray tracing is used to render realistic images and discuss its advantages and limitations.",
            "Color Models: Explain the RGB and CMYK color models in detail. How do these models differ, and where are each typically used?",
            "Texture Mapping: What is texture mapping in computer graphics? Describe the process of texture mapping and its applications in 3D rendering.",
            "Illumination and Shading Models: Explain the Phong illumination model. How does it improve upon the Lambertian model, and what are its uses in 3D rendering?",
          ],
        },
        {
          title: "Section D: Practical Questions (15 marks each)",
          instructions: "Answer any two questions",
          questions: [
            "Implementing Line Drawing Algorithm: Write and explain a program that implements Bresenham’s line drawing algorithm. Show how it is applied to draw a line between two given points.",
            "2D Graphics Transformation Program: Create a program that performs basic 2D transformations (translation, scaling, rotation) on a simple shape (e.g., a square). Provide sample input and output.",
            "Clipping Algorithm: Write and explain a program that implements the Cohen-Sutherland line clipping algorithm. Demonstrate its working with a suitable example.",
          ],
        },
      ],
    },
    // Additional question papers can be added here
  ];

 // Store refs for each question paper in an array
 const questionPaperRefs = useRef<any>([]);
 function generatePDF(paper:any) {
  const doc = new jsPDF();
  const margin = 10;
  const lineHeight = 8;
  const pageHeight = doc.internal.pageSize.height - margin * 2; // Available page height

  // Title
  doc.setFontSize(18);
  doc.text(paper.title, margin, margin + 10);

  // Time and Max Marks
  doc.setFontSize(12);
  doc.text(`Time: ${paper.time}`, margin, margin + 20);
  doc.text(`Max Marks: ${paper.maxMarks}`, margin, margin + 25);

  let currentY = margin + 30; // Start Y position for sections

  paper.sections.forEach((section:any) => {
    // Add a new page if currentY exceeds the page height
    if (currentY + 20 > pageHeight) {
      doc.addPage();
      currentY = margin; // Reset Y position for the new page
    }

    // Section Title
    doc.setFontSize(14);
    doc.text(section.title, margin, currentY);
    currentY += 10;

    // Instructions
    doc.setFontSize(12);
    doc.text(section.instructions, margin, currentY);
    currentY += 10;

    // Questions
    section.questions.forEach((question:any, qIdx:number) => {
      const questionNumber = `${qIdx + 1}. `;
      const fullText = questionNumber + question;
      const wrappedText = doc.splitTextToSize(fullText, doc.internal.pageSize.width - 2 * margin);

      // Check if adding this question exceeds the page height
      if (currentY + wrappedText.length * lineHeight > pageHeight) {
        doc.addPage();
        currentY = margin; // Reset Y position for the new page
      }

      // Add the question text
      doc.text(wrappedText, margin, currentY);
      currentY += wrappedText.length * lineHeight + 5;
    });

    currentY += 5; // Space between sections
  });

  // Save the PDF
  doc.save(`${paper.title}.pdf`);
}



// Trigger the PDF generation`

  return (
    <div className="">
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Question Bank</h1>
        <p className="text-lg text-gray-500 italic mb-4">
          Discover a variety of question papers curated for hands-on practice. Select and download to sharpen your skills!
        </p>
      </header>

      <div className="space-y-6">

        {questionPapers.map((paper, index) => (
          <div key={index} className="shadow-md  p-10  mt-5"                       >
            <button
              className="mb-4 bg-blue-700 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 transition duration-200  flex gap-2 justify-center  items-center cursor-pointer"
              onClick={()=>generatePDF(paper)}
            >
              <FaDownload/>
              Download Paper
            </button>
            <div  ref={(el) => {
            questionPaperRefs.current[index] = el;
          }} className=" p-10  max-lg:p-0 lg:w-[70%]">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{paper.title}</h2>
            <p className="text-sm text-gray-500 mb-2">Time: {paper.time}     |     Maximum Marks: {paper.maxMarks}</p>

            <div className="flex flex-col gap-4 ml-10">
              {paper.sections.map((section, secIndex) => (
                <div key={secIndex}>
                  <h3 className="text-lg font-semibold ">{section.title}</h3>
                  <p className="text-sm text-gray-600 italic mb-2">{section.instructions}</p>
                  <ul className="list-decimal pl-6 text-sm text-gray-600">
                    {section.questions.map((question, qIndex) => (
                      <li key={qIndex} className="mb-2">{question}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            </div>
          


          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionPaperBox
