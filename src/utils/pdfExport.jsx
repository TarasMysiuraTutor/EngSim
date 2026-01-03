import { jsPDF } from 'jspdf';

/**
 * Експортує результати розрахунків у PDF
 * Німецька - німецькою, решта мов - англійською
 */
export const exportToPDF = (data, currentLang = 'de') => {
  const { calculatorName, inputs, results, formula, notes } = data;

  // const doc = new jsPDF({
  //   orientation: 'portrait',
  //   unit: 'mm',
  //   format: 'a4'
  // });

  // Очищаємо всі дані від грецьких символів
  const cleanInputs = {};
  Object.entries(inputs).forEach(([key, value]) => {
    cleanInputs[replaceGreekSymbols(key)] = replaceGreekSymbols(value);
  });

  const cleanResults = {};
  Object.entries(results).forEach(([key, value]) => {
    cleanResults[replaceGreekSymbols(key)] = replaceGreekSymbols(value);
  });

  const cleanFormula = replaceGreekSymbols(formula);
  const cleanNotes = replaceGreekSymbols(notes);

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  // Тільки німецька та англійська
  const translations = {
    de: {
      title: 'Berechnungsbericht',
      calculator: 'Rechner',
      date: 'Datum',
      inputs: 'Eingabewerte',
      results: 'Ergebnisse',
      formula: 'Formel',
      notes: 'Hinweise',
      footer: 'Erstellt mit EngSim - Ingenieurtechnische Rechner',
      author: 'Autor',
      disclaimer: 'Dieser Bericht dient nur zu Informationszwecken. Fuer finale Berechnungen konsultieren Sie bitte einen qualifizierten Ingenieur.',
      website: 'Webseite'
    },
    en: {
      title: 'Calculation Report',
      calculator: 'Calculator',
      date: 'Date',
      inputs: 'Input Values',
      results: 'Results',
      formula: 'Formula',
      notes: 'Notes',
      footer: 'Created with EngSim - Engineering Calculators',
      author: 'Author',
      disclaimer: 'This report is for informational purposes only. For final calculations, please consult a qualified engineer.',
      website: 'Website'
    }
  };

  // Якщо не німецька - використовуємо англійську
  const t = currentLang === 'de' ? translations.de : translations.en;
  const currentDate = new Date().toLocaleDateString('de-DE');

  let yPosition = 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  // === HEADER ===
  doc.setFontSize(22);
  doc.setTextColor(30, 64, 175);
  doc.text(t.title, margin, yPosition);
  yPosition += 10;

  // Лінія
  doc.setDrawColor(59, 130, 246);
  doc.setLineWidth(0.5);
  doc.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 10;

  // Інформація про документ
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  
  doc.setFont('helvetica', 'bold');
  doc.text(`${t.calculator}:`, margin, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.text(calculatorName, margin + 45, yPosition);
  yPosition += 7;

  doc.setFont('helvetica', 'bold');
  doc.text(`${t.date}:`, margin, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.text(currentDate, margin + 45, yPosition);
  yPosition += 7;

  doc.setFont('helvetica', 'bold');
  doc.text(`${t.author}:`, margin, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.text('Viktor Sukaylo', margin + 45, yPosition);
  yPosition += 15;

  // === ВХІДНІ ДАНІ ===
  doc.setFontSize(14);
  doc.setTextColor(30, 64, 175);
  doc.setFont('helvetica', 'bold');
  doc.text(t.inputs, margin, yPosition);
  yPosition += 8;

  doc.setFontSize(10);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');

  Object.entries(inputs).forEach(([key, value]) => {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }

    // Фон для рядка
    doc.setFillColor(245, 247, 250);
    doc.rect(margin, yPosition - 5, contentWidth, 8, 'F');

    doc.text(String(key) + ':', margin + 2, yPosition);
    doc.text(String(value), margin + 85, yPosition);
    yPosition += 10;
  });

  yPosition += 5;

  // === РЕЗУЛЬТАТИ ===
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = 20;
  }

  doc.setFontSize(14);
  doc.setTextColor(30, 64, 175);
  doc.setFont('helvetica', 'bold');
  doc.text(t.results, margin, yPosition);
  yPosition += 8;

  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);

  Object.entries(results).forEach(([key, value]) => {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }

    // Фон для результатів (світло-зелений)
    doc.setFillColor(240, 253, 244);
    doc.rect(margin, yPosition - 5, contentWidth, 8, 'F');

    doc.setFont('helvetica', 'bold');
    doc.text(String(key) + ':', margin + 2, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(String(value), margin + 85, yPosition);
    yPosition += 10;
  });

  yPosition += 5;

  // === ФОРМУЛА (якщо є) ===
  if (cleanFormula) {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.setFont('helvetica', 'bold');
    doc.text(t.formula, margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('courier', 'normal');
    
    const formulaLines = doc.splitTextToSize(String(cleanFormula), contentWidth);
    formulaLines.forEach(line => {
      if (yPosition > pageHeight - 30) {
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += 5;
    });

    yPosition += 5;
  }

  // === ПРИМІТКИ (якщо є) ===
  if (cleanNotes) {
    if (yPosition > pageHeight - 60) { // ← Збільшено запас
      doc.addPage();
      yPosition = 20;
    }

    doc.setFontSize(14);
    doc.setTextColor(30, 64, 175);
    doc.setFont('helvetica', 'bold');
    doc.text(t.notes, margin, yPosition);
    yPosition += 8;

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    const notesLines = doc.splitTextToSize(String(cleanNotes), contentWidth);
    notesLines.forEach(line => {
      if (yPosition > pageHeight - 40) { // ← Збільшено запас
        doc.addPage();
        yPosition = 20;
      }
      doc.text(line, margin, yPosition);
      yPosition += 5;
    });
  }

  // === FOOTER тільки на першій сторінці ===
  // Повертаємося на першу сторінку для footer
  doc.setPage(1);
  
  // Disclaimer
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.setFont('helvetica', 'italic');
  
  const disclaimerLines = doc.splitTextToSize(t.disclaimer, contentWidth);
  let disclaimerY = pageHeight - 25;
  disclaimerLines.forEach(line => {
    doc.text(line, margin, disclaimerY);
    disclaimerY += 3;
  });

  // Footer text
  doc.setFontSize(9);
  doc.setTextColor(59, 130, 246);
  doc.setFont('helvetica', 'normal');
  doc.text(t.footer, pageWidth / 2, pageHeight - 12, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(100, 100, 100);
  doc.text(`${t.website}: https://tarasmysiuratutor.github.io/EngSim/`, pageWidth / 2, pageHeight - 7, { align: 'center' });

  // Зберігаємо PDF
  const safeCalculatorName = calculatorName.replace(/[^a-zA-Z0-9_-]/g, '_');
  const fileName = `${safeCalculatorName}_${currentDate.replace(/\./g, '-')}.pdf`;
  doc.save(fileName);
};

/**
 * Замінює грецькі та спеціальні символи на Latin
 */
const replaceGreekSymbols = (text) => {
  if (!text) return '';
  return String(text)
    .replace(/σ/g, 'sigma')
    .replace(/τ/g, 'tau')
    .replace(/ε/g, 'epsilon')
    .replace(/Δ/g, 'Delta')
    .replace(/δ/g, 'delta')
    .replace(/φ/g, 'phi')
    .replace(/θ/g, 'theta')
    .replace(/α/g, 'alpha')
    .replace(/β/g, 'beta')
    .replace(/γ/g, 'gamma')
    .replace(/μ/g, 'mu')
    .replace(/π/g, 'pi')
    .replace(/ρ/g, 'rho')
    .replace(/ω/g, 'omega')
    .replace(/Ω/g, 'Omega')
    .replace(/λ/g, 'lambda')
    .replace(/Å/g, 'A')
    .replace(/°/g, ' deg')
    .replace(/²/g, '^2')
    .replace(/³/g, '^3')
    .replace(/⁴/g, '^4')
    .replace(/·/g, '*');
};