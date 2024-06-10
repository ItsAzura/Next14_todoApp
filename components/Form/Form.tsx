'use client';
import React from 'react';
import styles from './Form.module.css';
import { ReactNode } from 'react';

//Khai báo kiểu dữ liệu cho props
interface FormProps {
  children: ReactNode; //children sẽ nhận các component con được truyền vào
  action: (formData: FormData) => Promise<void | boolean>; //action sẽ nhận một hàm trả về Promise với tham số là formData
  className?: string;
  onSubmit?: () => void; //onSubmit sẽ nhận một hàm không trả về gì
}

const Form = ({ children, action, className, onSubmit }: FormProps) => {
  //Tạo một ref cho form để lấy giá trị của form
  const ref = React.useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref} //ref này sẽ nhận giá trị của form
      //Khi form submit, sẽ gọi hàm action với tham số là formData
      action={async (formData) => {
        await action(formData); //Chờ hàm action thực thi xong
        ref.current?.reset(); //Reset form sau khi thực thi hàm action
      }}
    >
      {children}
    </form>
  );
};

export default Form;
