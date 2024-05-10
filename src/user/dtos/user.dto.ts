import {
  Field,
  InputType,
  Int,
  ObjectType,
  PartialType,
} from '@nestjs/graphql';
import {
  CreateRequest,
  FindByIdRequest,
  ResponseMultipleUser,
  ResponseSingleUser,
  SearchRequest,
  UpdateRequest,
  updateUserDto,
  User,
} from 'src/proto/user';

@InputType()
export class CreateUserDto implements CreateRequest {
  @Field((type) => String)
  fullName: string;

  @Field((type) => String)
  userName: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  password: string;
}

@InputType()
export class SearchUserDto implements SearchRequest {
  @Field((type) => String, { nullable: true })
  fullName?: string;

  @Field((type) => String, { nullable: true })
  userName?: string;

  @Field((type) => String, { nullable: true })
  email?: string;

  @Field((type) => Int, { nullable: true })
  limit?: number;

  @Field((type) => String, { nullable: true })
  role?: string;
}

@InputType()
export class FindByIdDto implements FindByIdRequest {
  @Field((type) => String)
  userId: string;
}

@InputType()
export class UpdateUser implements updateUserDto {
  @Field((type) => String, { nullable: true })
  fullName: string;

  @Field((type) => String, { nullable: true })
  userName: string;

  @Field((type) => String, { nullable: true })
  email: string;

  @Field((type) => String, { nullable: true })
  password: string;
}

@ObjectType()
export class UserDto implements User {
  @Field((type) => String)
  userId: string;
  @Field((type) => String)
  fullName: string;
  @Field((type) => String)
  userName: string;
  @Field((type) => String)
  email: string;
  @Field((type) => String)
  password: string;
  @Field((type) => Date)
  createdAt: Date;
  @Field((type) => Date, { nullable: true })
  deletedAt?: Date;
  @Field((type) => Date)
  updatedAt: Date;
}

@ObjectType()
export class ResponseSingleUserDto implements ResponseSingleUser {
  @Field((type) => Int, { nullable: true })
  status: number;
  @Field((type) => UserDto, { nullable: true })
  data: User;
  @Field((type) => [String], { nullable: true })
  error: string[];
}

@ObjectType()
export class ResponseMultipleUserDto implements ResponseMultipleUser {
  @Field((type) => Int, { nullable: true })
  status: number;
  @Field((type) => [UserDto], { nullable: true })
  data: User[];
  @Field((type) => [String], { nullable: true })
  error: string[];
}

@InputType()
export class UpdateUserDto implements UpdateRequest {
  @Field((type) => String)
  userId: string;
  @Field((type) => UpdateUser)
  userDto: UpdateUser;
}
