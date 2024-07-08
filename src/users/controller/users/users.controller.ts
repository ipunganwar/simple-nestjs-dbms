import { Body, Controller, Get, Param, Post } from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Jhon doe', email: 'jhondoe@mail.com' };
  }

  // @Post()
  // createUser(@Req() request: Request, @Res() response: Response) {
  //   response.send('created');
  // }

  @Post('create')
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);

    return { id };
  }
}
