import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { RegisterRequest, RegisterResponse } from 'src/proto/auth';

@InputType()
export class RegisterRequestDto implements RegisterRequest {
  @Field()
  fullName: string;
  @Field()
  userName: string;
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
export class RegisterResponseDto implements RegisterResponse {
  @Field({ nullable: true })
  status: number;
  @Field((type) => [String], { nullable: true })
  error: string[];
}
