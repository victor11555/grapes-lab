const express = require('express');
const router = express.Router();
const PdfPrinter = require('pdfmake');
const fs = require('fs');
const fonts = {
  Courier: {
    normal: 'Courier',
    bold: 'Courier-Bold',
    italics: 'Courier-Oblique',
    bolditalics: 'Courier-BoldOblique',
  },
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique',
  },
  Times: {
    normal: 'Times-Roman',
    bold: 'Times-Bold',
    italics: 'Times-Italic',
    bolditalics: 'Times-BoldItalic',
  },
  Symbol: {
    normal: 'Symbol',
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats',
  },
};
const printer = new PdfPrinter(fonts);
const path = require('path')

router.post('/', async (req, res) => {
  let { project } = req.body;
  const { projectName, projectResult, needs, author, basis, concept } = project;
  let docDefinition = {
    watermark: { text: 'rosatom', color: 'blue', opacity: 0.1, bold: false, italics: false },
    info: {
      title: `${projectName}`,
      author: `${author}`,
      subject: `${projectResult}`,
      keywords: `${needs} ${basis}`,
    },
    header: 'this is our header',
    footer: 'this is our footer',
    content: [
      {
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            [`${concept}`, 'Second', 'Third', 'The last one'],
            ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
            [{ text: 'Bold value', bold: false, margin: [50, 50, 50, 50] }, 'Val 2', 'Val 3', 'Val 4'],
            ['first', 'Third', '', 'The last one'],
          ],
        },
      },
    ],
    defaultStyle: {
      font: 'Helvetica',
    },
  };
  let pdfDoc = printer.createPdfKitDocument(docDefinition);
  let write = fs.createWriteStream('./document.pdf');
  pdfDoc.pipe(write);
  write.on('finish', () => {
    res.download(path.join(__dirname, '../document.pdf'))
  });
  pdfDoc.end();
});

module.exports = router;
