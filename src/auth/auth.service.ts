import { Inject, Injectable } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';
import {
  AUTH_SERVICE_NAME,
  AuthServiceClient,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ValidateResponse,
} from 'jwat-nestjs-common';

@Injectable()
export class AuthService {
  private svc: AuthServiceClient;

  constructor(@Inject(AUTH_SERVICE_NAME) private client: ClientGrpc) {}

  public onModuleInit(): void {
    this.svc = this.client.getService<AuthServiceClient>(AUTH_SERVICE_NAME);
  }

  public async validate(token: string): Promise<ValidateResponse> {
    return firstValueFrom(this.svc.validate({ token }));
  }

  public async login(request: LoginRequest): Promise<LoginResponse> {
    return await firstValueFrom(this.svc.login(request));
  }

  public async register(request: RegisterRequest): Promise<RegisterResponse> {
    return await firstValueFrom(this.svc.register(request));
  }
}
