import { IsOptional, IsString, MaxLength, IsEnum } from 'class-validator';
import { Column } from '../../../generated/prisma';

export class UpdateCardDto {
  @IsOptional()
  @IsString()
  @MaxLength(25)
  title?: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  description?: string;

  @IsOptional()
  @IsEnum(Column)
  column?: Column;
}
