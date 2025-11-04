import React from 'react';
import './Button.css';

/**
 * Basit bir Button komponenti - Test yazmak için örnek
 * @param {string} label - Buton üzerinde gösterilecek yazı
 * @param {function} onClick - Tıklama event handler
 * @param {boolean} disabled - Butonun devre dışı olup olmadığı
 * @param {string} variant - Buton stili ('primary', 'secondary', 'danger')
 */
export const Button = ({ 
  label = 'Tıkla', 
  onClick, 
  disabled = false,
  variant = 'primary' 
}) => {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {label}
    </button>
  );
};

