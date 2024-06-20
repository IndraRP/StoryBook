import React, { ChangeEvent } from 'react';


interface InputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type: 'text' | 'number' | 'secret';
}


const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = 'Enter text...',
  size = 'medium',
  disabled,
  type,
}) => {
  const sizeStyle = {
    small: {
      padding: '4px',
      fontSize: '12px',
    },
    medium: {
      padding: '8px',
      fontSize: '16px',
    },
    large: {
      padding: '12px',
      fontSize: '20px',
    },
  };

  return (
    <input
      type={type === 'secret' ? 'password' : type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        borderRadius: '4px',
        border: '1px solid #ccc',
        ...sizeStyle[size],
      }}
    />
  );
};

export default Input;