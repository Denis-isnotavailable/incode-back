import { Prisma } from 'generated/prisma';

export const returnBoardObject: Prisma.BoardSelect = {
  id: true,
  name: true,
  cards: true
};
