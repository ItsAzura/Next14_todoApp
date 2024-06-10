import React from 'react';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { changeStatus } from '@/app/actions/todoAction';

const ChangeTodo = ({ todo }: { todo: any }) => {
  return (
    <Form
      action={changeStatus} //Gọi hàm changeStatus từ actions/todoAction khi form submit
    >
      <Input
        name="inputId"
        type="hidden"
        placeholder="Change Todo..."
        value={todo.id} //Truyền id của todo vào value
      />
      <Button actionButton type="submit" text="Done?" />
    </Form>
  );
};

export default ChangeTodo;
