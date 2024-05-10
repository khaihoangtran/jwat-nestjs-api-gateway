import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { LoginRequest, LoginResponse } from 'src/proto/auth';

@InputType()
export class LoginDto implements LoginRequest {
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
export class LoginResponseDto implements LoginResponse {
  @Field({ nullable: true })
  status: number;
  @Field((type) => [String], { nullable: true })
  error: string[];
  @Field({ nullable: true })
  token: string;
}
