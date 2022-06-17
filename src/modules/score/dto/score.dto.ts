import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class ScoreDto {
  @IsNotEmpty()
  readonly type: string[];

  @IsNotEmpty()
  readonly value: number;
}
