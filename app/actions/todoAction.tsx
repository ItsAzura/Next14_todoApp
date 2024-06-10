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

//Hàm thay đổi trạng thái của Todo
export const changeStatus = async (formData: FormData) => {
  //Lấy giá trị từ input
  const inputId = formData.get('inputId') as string;
  if (!inputId) return;

  //Tìm todo theo id
  const todo = await prisma.todo.findUnique({
    where: { id: inputId },
  });
  if (!todo) return;

  //Cập nhật trạng thái của todo
  const updateStatus = !todo.isCompleted;

  //Update trạng thái của todo
  await prisma.todo.update({
    where: { id: inputId },
    data: { isCompleted: updateStatus },
  });

  //Revalidate lại trang
  revalidatePath('/');

  //Return trạng thái của todo
  return updateStatus;
};

//Hàm chỉnh sửa Todo
export const editTodo = async (formData: FormData) => {
  //Lấy giá trị của title từ input
  const input = formData.get('newInput') as string;
  if (!input) return;

  //Lấy giá trị của id từ input
  const inputId = formData.get('inputId') as string;
  if (!inputId) return;

  //Update lại title của todo
  await prisma.todo.update({
    where: { id: inputId },
    data: { title: input },
  });

  //Revalidate lại trang
  revalidatePath('/');
};
