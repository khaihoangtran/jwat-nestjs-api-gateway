import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginDto, LoginResponseDto } from 'src/dtos/login.dto';
import { RegisterRequestDto, RegisterResponseDto } from 'src/dtos/register.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly service: AuthService) {}

  @Query((returns) => LoginResponseDto)
  async login(@Args('body') body: LoginDto): Promise<LoginResponseDto> {
    return await this.service.login(body);
  }

  @Mutation((returns) => RegisterResponseDto)
  async register(
    @Args('body') body: RegisterRequestDto,
  ): Promise<RegisterResponseDto> {
    return  this.service.register(body);
  }
}
