import { IsInt, IsString, MaxLength } from 'class-validator';

export class CreateCardDto {
  @IsString()
  @MaxLength(25)
  title: string;

  @IsString()
  @MaxLength(250)
  description: string;

  @IsInt()
  boardId: number;
}
