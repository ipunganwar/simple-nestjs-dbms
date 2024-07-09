import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside validate');
    console.log(metadata);

    const parseToInt = parseInt(value.age.toString());
    if (isNaN(parseToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data type for property age. Expected Number',
        HttpStatus.BAD_REQUEST,
      );
    } else {
      return { ...value, age: parseToInt };
    }
  }
}
