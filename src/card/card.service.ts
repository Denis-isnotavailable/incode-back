import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CardService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCardDto) {
    const { title, description, boardId } = dto;

    return await this.prisma.card.create({
      data: {
        title,
        description,
        boardId
      }
    });
  }

  async findAll(boardId: number) {
    return await this.prisma.card.findMany({
      where: { boardId }
    });
  }

  async findOne(id: string) {
    const card = await this.prisma.card.findUnique({
      where: { id }
    });

    if (!card) throw new NotFoundException(`Card with ID ${id} not found`);

    return card;
  }

  async update(id: string, dto: UpdateCardDto) {
    const { title, description, column } = dto;

    return await this.prisma.card.update({
      where: { id },
      data: {
        title,
        description,
        column
      }
    });
  }

  async remove(id: string) {
    const card = await this.prisma.card.findUnique({
      where: { id }
    });

    if (!card) throw new NotFoundException(`Card with ID ${id} not found`);

    return await this.prisma.card.delete({
      where: { id }
    });
  }
}
