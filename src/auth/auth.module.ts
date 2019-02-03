import { Module } from '@nestjs/common';
import { HttpStrategy } from '../shared/http.strategy';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';

export const passportOptions = { defaultStrategy: 'bearer', property: 'user' };

@Module({
  imports: [PassportModule.register(passportOptions), UsersModule],
  providers: [AuthService, HttpStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
