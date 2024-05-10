import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      include: [AuthModule, UserModule],
      context: ({ req, res }) => ({ req, res }),
      formatError: (error) => {
        let message = !error.extensions.originalError
          ? [error.message]
          : error.extensions.originalError['message'];
        let code =
          error.extensions?.originalError?.['error'] ||
          error.extensions?.code ||
          'SERVER_ERROR';
        let status =
          error.extensions?.status ||
          error.extensions?.originalError?.['statusCode'] ||
          500;
        if (error.extensions?.code === 'GRAPHQL_VALIDATION_FAILED') {
          code = 'BAD REQUEST';
          status = 400;
        }

        const graphQLFormattedError = {
          message,
          code,
          status,
        };
        return graphQLFormattedError;
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
