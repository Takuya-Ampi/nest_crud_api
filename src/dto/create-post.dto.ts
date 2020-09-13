// import {IsInt,IsString, MinLength, MaxLength} from 'class-validator'


export class CreatePostDto {
  // strictモードだと初期化を明示しないといけないので!をつける
  readonly id!:number
  readonly title!:string
  readonly body!:string
}
