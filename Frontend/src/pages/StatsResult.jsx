import React from "react";
import HealthStatsChart from '../components/HealthStatsChart';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const healthData = [
  [
    { time: "2023-01-01 08:00", value: 98.6, label: "Body Temperature" },
    { time: "2023-01-02 08:00", value: 98.7, label: "Body Temperature" },
    { time: "2023-01-03 08:00", value: 98.4, label: "Body Temperature" },
    { time: "2023-01-04 08:00", value: 98.5, label: "Body Temperature" },
    { time: "2023-01-05 08:00", value: 98.6, label: "Body Temperature" },
    { time: "2023-01-06 08:00", value: 98.8, label: "Body Temperature" },
    { time: "2023-01-07 08:00", value: 98.7, label: "Body Temperature" },
  ],
  [
    { time: "2023-01-01 09:00", value: 120, label: "Blood Pressure" },
    { time: "2023-01-02 09:00", value: 118, label: "Blood Pressure" },
    { time: "2023-01-03 09:00", value: 115, label: "Blood Pressure" },
    { time: "2023-01-04 09:00", value: 116, label: "Blood Pressure" },
    { time: "2023-01-05 09:00", value: 119, label: "Blood Pressure" },
    { time: "2023-01-06 09:00", value: 117, label: "Blood Pressure" },
    { time: "2023-01-07 09:00", value: 120, label: "Blood Pressure" },
  ],
  [
    { time: "2023-01-01 10:00", value: 90, label: "Blood Sugar" },
    { time: "2023-01-02 10:00", value: 92, label: "Blood Sugar" },
    { time: "2023-01-03 10:00", value: 89, label: "Blood Sugar" },
    { time: "2023-01-04 10:00", value: 91, label: "Blood Sugar" },
    { time: "2023-01-05 10:00", value: 93, label: "Blood Sugar" },
    { time: "2023-01-06 10:00", value: 94, label: "Blood Sugar" },
    { time: "2023-01-07 10:00", value: 90, label: "Blood Sugar" },
  ],
];

function StatsResult() {
  const exportPDF = () => {
    const input = document.getElementById('charts-container');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
      
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      
      pdf.save('charts.pdf');
    });
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">Health Stats</h1>
      <button 
        onClick={exportPDF} 
        className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
      >
        Export to PDF
      </button>
      <div id="charts-container">
        <HealthStatsChart data={healthData} />
      </div>
      <Footer />
    </div>
  );
}

export default StatsResult;

