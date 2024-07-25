import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  
    getLogin(): string {
        return "Login Page"
    }
}