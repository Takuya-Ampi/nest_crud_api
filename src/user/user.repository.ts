import {EntityRepository, Repository} from "typeorm";
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  createAndSave(createUserDto: CreateUserDto) {
    const user = new User()
    user.name = createUserDto.name
    user.email = createUserDto.email
    user.password = createUserDto.password
    return this.manager.save(user)
  }
  findByName(name: string) {
    return this.findOne({ name });
  }
}
