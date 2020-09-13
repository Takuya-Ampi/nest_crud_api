import {IsInt,IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator'


export class CreatePostDto {
  // strictモードだと初期化を明示しないといけないので!をつける
  @IsInt()
  @IsNotEmpty()
  readonly id!:number
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  readonly title!:string
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(400)
  readonly body!:string
}
