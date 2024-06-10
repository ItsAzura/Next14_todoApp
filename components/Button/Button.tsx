'use client';
import React, { ReactNode } from 'react';
import styles from './Button.module.css';
import clsx from 'clsx';

//Khai báo kiểu dữ liệu cho props
interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; //type sẽ nhận một trong 3 giá trị: button, submit, reset
  text: string | ReactNode; //text sẽ nhận một chuỗi hoặc một ReactNode
  onClick?: () => void; //onClick sẽ nhận một hàm không trả về gì
  actionButton?: boolean; //actionButton sẽ nhận một giá trị boolean
}

const Button = ({ type, text, onClick, actionButton }: ButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        //Nếu actionButton là true thì sẽ thêm class styles.actionButton
        className={clsx(styles.button, actionButton && styles.actionButton)}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
