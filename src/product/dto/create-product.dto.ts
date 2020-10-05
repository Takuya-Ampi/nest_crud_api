import {IsInt,IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator'

export class CreateProductDto {
  // strictモードだと初期化を明示しないといけないので!をつける
  @IsInt()
  @IsNotEmpty()
  readonly id!:number
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  readonly name!:string
  @IsString()
  @IsNotEmpty()
  readonly image!:string
  @IsInt()
  readonly rate!:number
  @IsInt()
  readonly user_id!:number
  @IsInt()
  readonly category_id!:number
}
