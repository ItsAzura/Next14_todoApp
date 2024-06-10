import { PrismaClient } from '@prisma/client';

//Khai báo biến globalPrisma để lưu trữ biến prisma
const gloablPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

//Khởi tạo biến prisma nếu chưa tồn tại
export const prisma = gloablPrisma.prisma ?? new PrismaClient();

//Nếu không phải môi trường production thì gán biến prisma vào global
if (process.env.NODE_ENV !== 'production') {
  gloablPrisma.prisma = prisma;
}
