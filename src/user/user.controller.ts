import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { SignupUserDto, UserEntity } from './user.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() userData: SignupUserDto): Promise<UserEntity> {
    return this.userService.createUser(userData);
  }
}
