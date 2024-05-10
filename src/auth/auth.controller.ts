import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  Put,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import {
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
} from 'src/proto/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('register')
  private async register(
    @Body() body: RegisterRequest,
  ): Promise<RegisterResponse> {
    return this.service.register(body);
  }

  @Put('login')
  private async login(@Body() body: LoginRequest): Promise<LoginResponse> {
    return this.service.login(body);
  }
}
