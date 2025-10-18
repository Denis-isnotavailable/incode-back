import {
  ConflictException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { returnBoardObject } from './return.board.object';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BoardService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBoardDto) {
    try {
      return await this.prisma.board.create({
        data: {
          name: dto.name
        }
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `Board with name "${dto.name}" already exists`
        );
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.board.findMany();
  }

  async findOne(id: number) {
    const board = await this.prisma.board.findUnique({
      where: { id },
      select: returnBoardObject
    });

    if (!board) throw new NotFoundException(`Board with ID ${id} not found`);

    return board;
  }

  async update(id: number, dto: CreateBoardDto) {
    return await this.prisma.board.update({
      where: { id },
      data: {
        name: dto.name
      }
    });
  }

  async remove(id: number) {
    const board = await this.prisma.board.findUnique({
      where: { id }
    });

    if (!board) throw new NotFoundException(`Board with ID ${id} not found`);

    return await this.prisma.board.delete({
      where: { id }
    });
  }
}
