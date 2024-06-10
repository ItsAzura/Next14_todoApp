'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/utils/prisma';

//Hàm tạo Todo mới
export const createTodo = async (formData: FormData) => {
  //Lấy giá trị từ input
  const input = formData.get('input') as string;
  // Nếu không có giá trị thì return
  if (!input) return;

  //Tạo một todo mới với giá trị từ input và isCompleted = false
  await prisma.todo.create({
    data: {
      title: input,
      isCompleted: false,
    },
  });

  revalidatePath('/'); //Revalidate lại trang
};
