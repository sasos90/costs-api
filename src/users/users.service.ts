import { Injectable } from '@nestjs/common';
import { User } from '../user';

@Injectable()
export class UsersService {
  findOneByToken(token: string): Promise<User> {
    return Promise.resolve(new User('saso', 'sasopw'));
  }
}
