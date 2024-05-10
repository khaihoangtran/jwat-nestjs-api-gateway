import { AUTH_PACKAGE_NAME } from './../proto/auth';
import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AUTH_SERVICE_NAME } from 'src/proto/auth';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [
    ClientsModule.register([
      {
        name: AUTH_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3000',
          package: AUTH_PACKAGE_NAME,
          protoPath: './src/proto/auth.proto',
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
