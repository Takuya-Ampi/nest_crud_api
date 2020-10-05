import {IsInt,IsString, MinLength, MaxLength, IsNotEmpty } from 'class-validator'

export class CreateUserDto {
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
  readonly email!:string
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(20)
  readonly password!:string
}
