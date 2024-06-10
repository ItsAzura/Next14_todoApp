import React from 'react';
import styles from './Todo.module.css';
import ChangeToDo from '@/components/ChangeTodo/ChangeTodo';
import { TodoType } from '@/type/todoType';
import EditTodo from '@/components/EditTodo/EditTodo';
import DeleteTodo from '@/components/DeleteTodo/DeleteTodo';

interface Props {
  todo: TodoType;
}

const Todo = ({ todo }: Props) => {
  //Kiểu dữ liệu cho todoStyle khi thay đổi style của todo
  const todoStyle = {
    textDecoration: todo.isCompleted ? 'line-through' : 'none',
    opacity: todo.isCompleted ? 0.5 : 1,
  };
  return (
    <div className={styles.TodoItem} style={todoStyle}>
      <ChangeToDo
        todo={todo} //Truyền todo vào ChangeToDo
      />
      <p>{todo.title}</p>
      <div className={styles.GroupBtn}>
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
