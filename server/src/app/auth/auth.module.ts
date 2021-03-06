import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controler';
import { JwtStrategy } from './services/jwtStrategy.service';
import { jwtGuard } from './services/jwtGuard.service';

@Module({
  controllers: [AuthController],
  imports: [UserModule],
  providers: [AuthService, JwtStrategy, jwtGuard],
  exports: [jwtGuard],
})
export class AuthModule {}
