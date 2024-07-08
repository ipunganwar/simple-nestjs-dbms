import { Injectable } from '@nestjs/common';
import { CreateUserType } from '../../../utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Jhon doe 1', email: 'jhondoe@mail1.com' },
    { username: 'Jhon doe 2', email: 'jhondoe@mail2.com' },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return;
  }

  fetchUserById(id?: number) {
    return { id };
  }
}
