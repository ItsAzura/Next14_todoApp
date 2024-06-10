import Image from 'next/image';
import AddTodo from '@/components/AddTodo/AddTodo';
import styles from './Home.module.css';
import { prisma } from '@/utils/prisma';
import Todo from '@/components/Todo/Todo';

//Hàm lấy dữ liệu từ database sử dụng Prisma
const getTodos = async () => {
  //Lấy tất cả các todo từ database
  const todos = await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' }, //Sắp xếp theo thời gian tạo mới nhất
    select: { id: true, title: true, isCompleted: true }, //Chỉ lấy các trường id, title, isCompleted
  });
  return todos; //Trả về danh sách todo
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className={styles.container}>
      <h1>Next14 To Do App</h1>
      <div className={styles.main}>
        <AddTodo />
        <div className={styles.ItemList}>
          {todos.map((todo, id) => (
            <div className={styles.item} key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
