import { Prisma, User } from '@prisma/client';

export class UserEntity implements User {
  id: number;
  email: string;
  name: string;
}

export class SignupUserDto implements Prisma.UserCreateInput {
  email: string;
  posts?: Prisma.PostCreateNestedManyWithoutAuthorInput;
  name?: string;
}
