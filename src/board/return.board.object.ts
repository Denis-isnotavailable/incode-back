import { Prisma } from 'src/prisma';

export const returnBoardObject: Prisma.BoardSelect = {
  id: true,
  name: true,
  cards: true
};
