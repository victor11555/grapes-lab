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
    normal: '/fonts/TimesNewRoman.ttf',
    bold: '/fonts/TimesNewRoman-bold.ttf',
    italics: '/fonts/TimesNewRoman.ttf',
    bolditalics: '/fonts/TimesNewRoman.ttf',
  },
  Symbol: {
    normal: 'Symbol',
  },
  ZapfDingbats: {
    normal: 'ZapfDingbats',
  },
};
const printer = new PdfPrinter(fonts);
const path = require('path');

router.post('/', async (req, res) => {
  const project = req.body;
  let docDefinition = {
    watermark: { text: 'rosatom', color: 'blue', opacity: 0.3, bold: false, italics: false },
    info: {
      title: project.title,
      author: project.author,
      subject: project.subject,
      keywords: project.keywords
    },

    header: {text:`${project.projectName}`,  fontSize: 25, bold: true, alignment: 'center', color: '#6b5b95', characterSpacing: 2},

    content:[
      {text: 'Концепт.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.concept}`},
      {text: 'О проекте.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.description}`},
      {text: 'Технология.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.technology}`},
      {text: 'Целевая аудитория.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.targetClient}`},
      {text: 'Анализа конкурентов.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.comparison}`},
      {text: 'Обоснование актуальности.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.basis}`},
      {text: 'Необходимые условия.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.needs}`},
      {text: 'Результат проекта.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.projectResult}`},
      {text: 'Приемлемый результат.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.acceptableOutcome}`},
      {text: 'Дополнительные нужды.', bold: true, fontSize: 18,  margin: [0,10,0,10], color: '#6b5b95'},
      {text: `${project.additionalNeeds}`}
    ],

    defaultStyle: {
      font: 'Times',
      fontSize: 12
    }
  };

  let pdfDoc = printer.createPdfKitDocument(docDefinition);
  let write = fs.createWriteStream('./document.pdf');
  pdfDoc.pipe(write);
  write.on('finish', () => {
    res.download(path.join(__dirname, '../document.pdf'));
  });
  pdfDoc.end();
});

module.exports = router;
