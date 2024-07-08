import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.fetchUsers();
  }

  // @Post()
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   response.send('created');
  // }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() body: CreateUserDto) {
    this.userService.createUser(body);
    return;
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user) {
      throw new HttpException('user not found!', HttpStatus.BAD_REQUEST);
    }

    return { id };
  }
}
