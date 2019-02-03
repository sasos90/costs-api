import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  @Get()
  @UseGuards(AuthGuard())
  getUsers() {
    return [];
  }
}
