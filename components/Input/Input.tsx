import React from 'react';
import styles from './Input.module.css';

//Khai báo kiểu dữ liệu cho props
interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

//Khai báo component Input
const Input = ({ name, type, placeholder, value }: InputProps) => {
  return (
    <>
      <input //Input này sẽ nhận các props như name, type, placeholder, value từ component cha
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default Input;
