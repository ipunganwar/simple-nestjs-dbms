import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('using middleware');
    const { authorization } = req.headers;

    if (!authorization)
      throw new HttpException('No Auth Token', HttpStatus.FORBIDDEN);
    next();
  }
}
