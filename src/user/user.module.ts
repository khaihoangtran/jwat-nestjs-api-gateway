import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { USER_PACKAGE_NAME, USER_SERVICE_NAME } from 'src/proto/user';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:3002',
          package: USER_PACKAGE_NAME,
          protoPath: './src/proto/user.proto',
        },
      },
    ]),
  ],
})
export class UserModule {}
