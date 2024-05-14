import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME, USER_SERVICE_NAME } from 'jwat-nestjs-common';
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
          protoPath:
            './node_modules/jwat-nestjs-common/common/protos/user.proto',
        },
      },
    ]),
  ],
})
export class UserModule {}
