import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  CreateUserDto,
  FindByIdDto,
  ResponseMultipleUserDto,
  ResponseSingleUserDto,
  SearchUserDto,
  UpdateUserDto,
} from './dtos/user.dto';
import { Observable } from 'rxjs';

@Resolver()
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Mutation((returns) => ResponseSingleUserDto)
  async create(
    @Args('body') body: CreateUserDto,
  ): Promise<Observable<ResponseSingleUserDto>> {
    return this.service.create(body);
  }

  @Mutation((returns) => ResponseSingleUserDto)
  async update(
    @Args('body') body: UpdateUserDto,
  ): Promise<Observable<ResponseSingleUserDto>> {
    return this.service.update(body);
  }

  @Mutation((returns) => ResponseSingleUserDto)
  async delete(
    @Args('body') body: FindByIdDto,
  ): Promise<Observable<ResponseSingleUserDto>> {
    return this.service.delete(body);
  }

  @Query((returns) => ResponseSingleUserDto)
  async findOneById(
    @Args('body') body: FindByIdDto,
  ): Promise<Observable<ResponseSingleUserDto>> {
    return this.service.findOneById(body);
  }

  @Query((returns) => ResponseMultipleUserDto)
  async findAll(
    @Args('body') body: SearchUserDto,
  ): Promise<Observable<ResponseMultipleUserDto>> {
    return this.service.findAll(body);
  }

  @Query((returns) => ResponseSingleUserDto)
  async findById(
    @Args('body') body: FindByIdDto,
  ): Promise<Observable<ResponseSingleUserDto>> {
    return this.service.findOneById(body);
  }
}
