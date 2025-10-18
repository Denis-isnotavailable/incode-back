import { Prisma } from '@prisma/client';

export const returnBoardObject: Prisma.BoardSelect = {
  id: true,
  name: true,
  cards: true
};
