# 💡 ПРИКЛАДИ ВИКОРИСТАННЯ

## Приклад 1: Базове використання всіх формул

```javascript
import { strengthReferenceData } from './strength-reference';

const ReferenceComponent = ({ currentLang = 'uk' }) => {
  const { formulas, tables } = strengthReferenceData;
  
  return (
    <div>
      <h1>Довідник з опору матеріалів</h1>
      
      {/* Відображення формул */}
      <section>
        <h2>Формули ({formulas.length})</h2>
        {formulas.map(formula => (
          <div key={formula.id} className="formula-card">
            <h3>{formula.title[currentLang]}</h3>
            <FormulaDisplay formula={formula.formula} />
            <div className="variables">
              <p>де:</p>
              <ul>
                {formula.variables.map((v, i) => (
                  <li key={i}>{v[currentLang]}</li>
                ))}
              </ul>
            </div>
            {formula.example && (
              <div className="example">
                <strong>Приклад:</strong> {formula.example[currentLang]}
              </div>
            )}
            {formula.source && (
              <div className="source">
                <a href={formula.source.url} target="_blank">
                  {formula.source.name}
                </a>
              </div>
            )}
          </div>
        ))}
      </section>
      
      {/* Відображення таблиць */}
      <section>
        <h2>Таблиці ({tables.length})</h2>
        {tables.map(table => (
          <div key={table.id} className="table-card">
            <h3>{table.title[currentLang]}</h3>
            <table>
              <thead>
                <tr>
                  {table.headers[currentLang].map((header, i) => (
                    <th key={i} dangerouslySetInnerHTML={{ __html: header }} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            {table.note && (
              <p className="note">{table.note[currentLang]}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};
```

---

## Приклад 2: Використання по категоріях з фільтрацією

```javascript
import { formulasByCategory, tablesByCategory } from './strength-reference';

const CategoryBrowser = ({ currentLang = 'uk' }) => {
  const [selectedCategory, setSelectedCategory] = useState('basics');
  
  const categories = [
    { id: 'basics', name: { uk: 'Основи', en: 'Basics' } },
    { id: 'bending', name: { uk: 'Згин', en: 'Bending' } },
    { id: 'shear', name: { uk: 'Зсув', en: 'Shear' } },
    { id: 'torsion', name: { uk: 'Кручення', en: 'Torsion' } },
    { id: 'stability', name: { uk: 'Стійкість', en: 'Stability' } },
    { id: 'design', name: { uk: 'Проектування', en: 'Design' } },
    { id: 'connections', name: { uk: 'З\'єднання', en: 'Connections' } }
  ];
  
  const currentFormulas = formulasByCategory[selectedCategory];
  
  return (
    <div>
      <div className="category-buttons">
        {categories.map(cat => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={selectedCategory === cat.id ? 'active' : ''}
          >
            {cat.name[currentLang]}
          </button>
        ))}
      </div>
      
      <div className="formulas-list">
        {currentFormulas.map(formula => (
          <FormulaCard 
            key={formula.id} 
            formula={formula} 
            lang={currentLang} 
          />
        ))}
      </div>
    </div>
  );
};
```

---

## Приклад 3: Пошук формул

```javascript
import { strengthReferenceData } from './strength-reference';

const FormulaSearch = ({ currentLang = 'uk' }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { formulas } = strengthReferenceData;
  
  const filteredFormulas = formulas.filter(formula => {
    const searchLower = searchTerm.toLowerCase();
    return (
      formula.title[currentLang].toLowerCase().includes(searchLower) ||
      formula.formula.toLowerCase().includes(searchLower) ||
      formula.variables.some(v => 
        v[currentLang].toLowerCase().includes(searchLower)
      )
    );
  });
  
  return (
    <div>
      <input
        type="text"
        placeholder="Пошук формул..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="results">
        <p>Знайдено: {filteredFormulas.length} формул</p>
        {filteredFormulas.map(formula => (
          <FormulaCard 
            key={formula.id} 
            formula={formula} 
            lang={currentLang}
            highlightTerm={searchTerm}
          />
        ))}
      </div>
    </div>
  );
};
```

---

## Приклад 4: Калькулятор на основі формул

```javascript
import { formulasByCategory } from './strength-reference';

const StressCalculator = () => {
  const [force, setForce] = useState(10000); // Н
  const [area, setArea] = useState(0.001); // м²
  
  // Формула: σ = N/A
  const basicFormula = formulasByCategory.basics.find(
    f => f.id === 'normal-stress'
  );
  
  const stress = force / area; // Па
  const stressMPa = stress / 1e6; // МПа
  
  return (
    <div className="calculator">
      <h3>{basicFormula.title['uk']}</h3>
      <FormulaDisplay formula={basicFormula.formula} />
      
      <div className="inputs">
        <label>
          Поздовжня сила N (Н):
          <input 
            type="number" 
            value={force} 
            onChange={(e) => setForce(Number(e.target.value))}
          />
        </label>
        
        <label>
          Площа перерізу A (м²):
          <input 
            type="number" 
            step="0.0001"
            value={area} 
            onChange={(e) => setArea(Number(e.target.value))}
          />
        </label>
      </div>
      
      <div className="result">
        <h4>Результат:</h4>
        <p>σ = {stressMPa.toFixed(2)} МПа</p>
      </div>
    </div>
  );
};
```

---

## Приклад 5: Інтерактивна таблиця зі сталями

```javascript
import { tablesByCategory } from './strength-reference';

const SteelPropertiesTable = ({ currentLang = 'uk' }) => {
  const [selectedSteel, setSelectedSteel] = useState(null);
  const materialsTable = tablesByCategory.materials[0];
  
  return (
    <div>
      <h3>{materialsTable.title[currentLang]}</h3>
      
      <table className="interactive-table">
        <thead>
          <tr>
            {materialsTable.headers[currentLang].map((header, i) => (
              <th key={i} dangerouslySetInnerHTML={{ __html: header }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {materialsTable.rows.map((row, i) => (
            <tr 
              key={i}
              onClick={() => setSelectedSteel(row[0])}
              className={selectedSteel === row[0] ? 'selected' : ''}
            >
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
      {selectedSteel && (
        <div className="steel-info">
          <h4>Вибрано: {selectedSteel}</h4>
          <p>Натисніть на інший рядок для перегляду властивостей</p>
        </div>
      )}
      
      <p className="note">{materialsTable.note[currentLang]}</p>
    </div>
  );
};
```

---

## Приклад 6: Експорт даних в PDF/Excel

```javascript
import { strengthReferenceData } from './strength-reference';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

const ExportComponent = ({ currentLang = 'uk' }) => {
  const { formulas, tables } = strengthReferenceData;
  
  const exportToPDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;
    
    doc.setFontSize(20);
    doc.text('Довідник з опору матеріалів', 20, yPosition);
    yPosition += 15;
    
    formulas.forEach(formula => {
      if (yPosition > 270) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFontSize(14);
      doc.text(formula.title[currentLang], 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(10);
      doc.text(`Формула: ${formula.formula}`, 20, yPosition);
      yPosition += 15;
    });
    
    doc.save('strength-reference.pdf');
  };
  
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();
    
    // Експорт формул
    const formulasData = formulas.map(f => ({
      'ID': f.id,
      'Категорія': f.category,
      'Назва': f.title[currentLang],
      'Формула': f.formula
    }));
    const wsFormulas = XLSX.utils.json_to_sheet(formulasData);
    XLSX.utils.book_append_sheet(wb, wsFormulas, 'Формули');
    
    // Експорт таблиць
    tables.forEach(table => {
      const tableData = table.rows.map(row => {
        const obj = {};
        table.headers[currentLang].forEach((header, i) => {
          obj[header] = row[i];
        });
        return obj;
      });
      const ws = XLSX.utils.json_to_sheet(tableData);
      XLSX.utils.book_append_sheet(wb, ws, table.title[currentLang].substring(0, 30));
    });
    
    XLSX.writeFile(wb, 'strength-reference.xlsx');
  };
  
  return (
    <div className="export-buttons">
      <button onClick={exportToPDF}>Експорт в PDF</button>
      <button onClick={exportToExcel}>Експорт в Excel</button>
    </div>
  );
};
```

---

## Приклад 7: Порівняння профілів

```javascript
import { tablesByCategory } from './strength-reference';

const SectionComparison = ({ currentLang = 'uk' }) => {
  const [selectedSections, setSelectedSections] = useState([]);
  const heaSections = tablesByCategory.sections.find(
    t => t.id === 'hea-sections'
  );
  
  const toggleSection = (sectionName) => {
    setSelectedSections(prev => 
      prev.includes(sectionName)
        ? prev.filter(s => s !== sectionName)
        : [...prev, sectionName]
    );
  };
  
  const selectedData = heaSections.rows.filter(row => 
    selectedSections.includes(row[0])
  );
  
  return (
    <div>
      <h3>Порівняння профілів HEA</h3>
      
      <div className="section-selector">
        {heaSections.rows.map(row => (
          <label key={row[0]}>
            <input
              type="checkbox"
              checked={selectedSections.includes(row[0])}
              onChange={() => toggleSection(row[0])}
            />
            {row[0]}
          </label>
        ))}
      </div>
      
      {selectedData.length > 0 && (
        <div className="comparison-table">
          <table>
            <thead>
              <tr>
                {heaSections.headers[currentLang].map((h, i) => (
                  <th key={i} dangerouslySetInnerHTML={{ __html: h }} />
                ))}
              </tr>
            </thead>
            <tbody>
              {selectedData.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
```

---

## Приклад 8: Мобільна версія з акордеоном

```javascript
import { strengthReferenceData } from './strength-reference';
import { useState } from 'react';

const MobileReference = ({ currentLang = 'uk' }) => {
  const [expandedId, setExpandedId] = useState(null);
  const { formulas } = strengthReferenceData;
  
  return (
    <div className="mobile-reference">
      {formulas.map(formula => (
        <div key={formula.id} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => setExpandedId(
              expandedId === formula.id ? null : formula.id
            )}
          >
            <span>{formula.title[currentLang]}</span>
            <span>{expandedId === formula.id ? '▲' : '▼'}</span>
          </button>
          
          {expandedId === formula.id && (
            <div className="accordion-content">
              <FormulaDisplay formula={formula.formula} />
              <div className="variables">
                {formula.variables.map((v, i) => (
                  <p key={i}>{v[currentLang]}</p>
                ))}
              </div>
              {formula.example && (
                <div className="example">
                  {formula.example[currentLang]}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
```

---

## 🎨 CSS для прикладів

```css
/* Стилі для карток формул */
.formula-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.variables {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.example {
  background: #e8f5e9;
  padding: 10px;
  border-left: 4px solid #4caf50;
  margin: 10px 0;
}

.source a {
  color: #1976d2;
  text-decoration: none;
}

/* Стилі для таблиць */
.table-card table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
}

.table-card th,
.table-card td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.table-card th {
  background: #3f51b5;
  color: white;
}

.table-card tr:nth-child(even) {
  background: #f5f5f5;
}

.table-card tr:hover {
  background: #e3f2fd;
}

/* Стилі для калькулятора */
.calculator {
  max-width: 500px;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.calculator input {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.result {
  background: #e3f2fd;
  padding: 15px;
  border-radius: 5px;
  margin-top: 15px;
  text-align: center;
}

.result h4 {
  margin-top: 0;
}

/* Мобільні стилі */
@media (max-width: 768px) {
  .formula-card {
    padding: 15px;
  }
  
  .category-buttons button {
    font-size: 12px;
    padding: 8px 12px;
  }
  
  table {
    font-size: 12px;
  }
}
```

---

**Всі приклади готові до використання! Просто скопіюйте та адаптуйте під ваш проект.**
