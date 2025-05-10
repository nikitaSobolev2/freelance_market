'use client'

import React from 'react'
import styles from './styles.module.scss'
import useCodeInput from './hooks'


interface Props {
  length: number;
  label?: string;
  onChange?: (code: string) => void;
  onComplete?: (code: string) => void;
  disabled?: boolean;
  visualSplitPoint?: number;
  initialValue?: string;
  className?: string;
}

const CodeInput: React.FC<Props> = React.memo(({
  length,
  label,
  onChange,
  onComplete,
  disabled = false,
  visualSplitPoint,
  initialValue = '',
  className = '',
}) => {
  const { 
    code, 
    inputRefs, 
    handleChange, 
    handleKeyDown, 
    handlePaste 
  } = useCodeInput({ length, initialValue, onChange, onComplete });

  return (
    <div className={`${styles.codeInput__container} ${className}`}>
      {label && <label className={styles.codeInput__label}>{label}</label>}
      <div className={styles.codeInput__inputsWrapper}>
        {Array.from({ length }).map((_, index) => {
          let inputSpecificClassName = styles.codeInput__input;
          if (visualSplitPoint !== undefined) {
            if (index < visualSplitPoint) {
              inputSpecificClassName += ` ${styles.codeInput__input_typeA}`;
            } else {
              inputSpecificClassName += ` ${styles.codeInput__input_typeB}`;
            }
          }
          return (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={code[index] || ''}
              onChange={(ev) => handleChange(ev, index)}
              onKeyDown={(ev) => handleKeyDown(ev, index)}
              onPaste={(ev) => handlePaste(ev, index)}
              disabled={disabled}
              className={inputSpecificClassName}
              aria-label={`Code digit ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
});

CodeInput.displayName = 'CodeInput';

export default CodeInput;
