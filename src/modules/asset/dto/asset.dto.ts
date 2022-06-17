import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';


export class AssetDto {
  @IsNotEmpty()
  readonly type: string;

  @IsNotEmpty()
  readonly filename: string;

  @IsNotEmpty()
  readonly extension: string;
}
