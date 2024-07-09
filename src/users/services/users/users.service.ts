import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { CreateUserParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findUsers() {}

  createUser(userDetails: CreateUserParams) {
    const newUser = this.userRepository.create({
      ...userDetails,
      createdAt: String(new Date()),
    });
    return this.userRepository.save(newUser);
  }
}
