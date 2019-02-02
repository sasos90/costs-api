import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  postLogin(): any {
    return {
      profile: {
        username: 'demo',
      },
    };
  }
}
