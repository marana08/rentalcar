'use client';

import { useState } from 'react';
import styles from './CustomSelect.module.css';

type CustomSelectProps = {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  prefix?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

export default function CustomSelect({
  label,
  placeholder,
  value,
  options,
  prefix,
  disabled = false,
  onChange,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedText = value ? `${prefix ?? ''}${value}` : placeholder;

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>

      <button
        type='button'
        className={styles.control}
        disabled={disabled}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedText}</span>
        <span className={styles.arrow}>⌃</span>
      </button>

      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option) => (
            <li key={option}>
              <button
                type='button'
                className={styles.option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}