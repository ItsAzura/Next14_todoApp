import React from 'react';
import styles from './AddTodo.module.css';
import Form from '@/components/Form/Form';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { createTodo } from '@/app/actions/todoAction';

const AddTodo = () => {
  return (
    <Form
      className={styles.form}
      action={createTodo} //Gọi hàm createTodo từ actions/todoAction khi form submit
    >
      <div className={styles.container}>
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button text="Add" type="submit" />
      </div>
    </Form>
  );
};

export default AddTodo;
