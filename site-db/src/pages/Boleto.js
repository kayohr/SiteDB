import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { pdf } from '@react-pdf/renderer';
import jsPDF from 'jspdf';

function Boleto(props) {
  const generatePdf = async () => {
    const doc = new jsPDF();
    doc.text(`Valor: R$ ${props.valor}`, 20, 20);
    doc.text(`Data de vencimento: ${props.dataVencimento}`, 20, 30);
    doc.text(`Código de barras: ${props.codigoBarra}`, 20, 40);
    const pdfBlob = await pdf(doc.output()).toBlob();
    const pdfUrl = URL.createObjectURL(pdfBlob);
    window.open(pdfUrl);
  };

  return (
    <div>
      <Document>
        <Page size="A4" width={800} height={1100}>
          <div>{props.valor}</div>
          <div>{props.dataVencimento}</div>
          <div>{props.codigoBarra}</div>
        </Page>
      </Document>
      <div>
        <button onClick={generatePdf}>Gerar boleto</button>
      </div>
    </div>
  );
}

export default Boleto;

