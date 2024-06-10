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
    opacity: todo.isCompleted ? 0.5 : 1,
    boxShadow: todo.isCompleted ? 'none' : '0 0 10px #fff',
  };
  return (
    <div className={styles.TodoItem} style={todoStyle}>
      <div className={styles.title}>
        <ChangeToDo
          todo={todo} //Truyền todo vào ChangeToDo
        />
        <p>{todo.title}</p>
      </div>
      <div className={styles.GroupBtn}>
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
