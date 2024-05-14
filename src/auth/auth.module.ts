import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth.controller';
import { AUTH_PACKAGE_NAME, AUTH_SERVICE_NAME } from 'jwat-nestjs-common';

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
          protoPath:
            './node_modules/jwat-nestjs-common/common/protos/auth.proto',
        },
      },
    ]),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
