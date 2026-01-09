// src/hooks/useCalculationHistory.js
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'engsim_calc_history';
const MAX_HISTORY_ITEMS = 50;

export const useCalculationHistory = () => {
  const [history, setHistory] = useState([]);

  // Завантаження історії при монтуванні
  useEffect(() => {
    const loadHistory = () => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setHistory(parsed);
        }
      } catch (error) {
        console.error('Error loading history:', error);
      }
    };

    loadHistory();
  }, []);

  // Додавання нового розрахунку
  const addCalculation = (calculatorId, calculatorName, inputs, result, lang) => {
    const newItem = {
      id: Date.now(),
      calculatorId,
      calculatorName,
      inputs,
      result,
      lang,
      timestamp: Date.now()
    };

    setHistory(prev => {
      const updated = [newItem, ...prev].slice(0, MAX_HISTORY_ITEMS);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Error saving history:', error);
      }
      return updated;
    });

    return newItem;
  };

  // Видалення одного елемента
  const removeCalculation = (id) => {
    setHistory(prev => {
      const updated = prev.filter(item => item.id !== id);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (error) {
        console.error('Error updating history:', error);
      }
      return updated;
    });
  };

  // Очищення всієї історії
  const clearHistory = () => {
    setHistory([]);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Error clearing history:', error);
    }
  };

  // Отримання історії для конкретного калькулятора
  const getCalculatorHistory = (calculatorId) => {
    return history.filter(item => item.calculatorId === calculatorId);
  };

  // Отримання останніх N розрахунків
  const getRecentCalculations = (limit = 10) => {
    return history.slice(0, limit);
  };

  // Форматування часу
  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return { uk: 'Щойно', ru: 'Только что', en: 'Just now', de: 'Gerade eben' };
    if (minutes < 60) return { uk: `${minutes} хв тому`, ru: `${minutes} мин назад`, en: `${minutes}m ago`, de: `vor ${minutes}m` };
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return { uk: `${hours} год тому`, ru: `${hours} ч назад`, en: `${hours}h ago`, de: `vor ${hours}h` };
    
    const days = Math.floor(hours / 24);
    return { uk: `${days} дн тому`, ru: `${days} д назад`, en: `${days}d ago`, de: `vor ${days}d` };
  };

  return {
    history,
    addCalculation,
    removeCalculation,
    clearHistory,
    getCalculatorHistory,
    getRecentCalculations,
    formatTime
  };
};