import {EntityRepository, Repository} from "typeorm";
import { User } from './user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findByName(name: string) {
    return this.findOne({ name });
  }
}
