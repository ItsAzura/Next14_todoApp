'use client';
import React from 'react';
import styles from './EditTodo.module.css';
import From from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { useState } from 'react';
import { editTodo } from '@/app/actions/todoAction';

const EditTodo = ({ todo }: { todo: any }) => {
  //State để kiểm tra xem có đang ở chế độ chỉnh sửa không
  const [edit, setEdit] = useState(false);

  //Hàm xử lý khi click vào nút Edit
  const handleEdit = () => {
    //Nếu todo đã hoàn thành thì không cho chỉnh sửa
    if (todo.isCompleted === true) return;
    setEdit(!edit);
  };

  //Hàm xử lý khi submit form
  const handleSubmit = () => {
    setEdit(false);
  };

  return (
    <div className={styles.container}>
      {/* Nếu đang ở chế độ chỉnh sửa thì hiển thị form chỉnh sửa */}
      {edit ? (
        <From
          action={editTodo} //Gọi hàm chỉnh sửa editTodo ở actions/todoAction
          onSubmit={handleSubmit}
        >
          <Input
            name="inputId"
            value={todo.id} //Truyền id của todo vào input
            type="hidden"
          />
          <div className={styles.groupBtn}>
            <Input
              name="newInput" //Truyền giá trị của todo vào input
              type="text"
              placeholder="EditTodo..."
            />
            <Button text="Save" actionButton />
          </div>
        </From>
      ) : (
        //Nếu không thì hiển thị nút Edit
        <Button onClick={handleEdit} text="Edit" actionButton />
      )}
    </div>
  );
};

export default EditTodo;
