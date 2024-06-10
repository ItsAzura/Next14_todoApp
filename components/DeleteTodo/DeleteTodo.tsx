import React from 'react';
import styles from './DeleteTodo.module.css';
import Form from '@/components/Form/Form';
import { deleteTodo } from '@/app/actions/todoAction';
import Button from '@/components/Button/Button';
import Input from '@/components/Input/Input';

const DeleteTodo = ({ todo }: { todo: any }) => {
  return (
    <Form action={deleteTodo}>
      {/* Input này hidden để truyền id của todo cần xóa */}
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button text="Delete" actionButton />
    </Form>
  );
};

export default DeleteTodo;
