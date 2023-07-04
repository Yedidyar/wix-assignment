import { Post, User } from '@prisma/client';

export class PostEntity implements Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
}

export class CreatePostDto {
  title: Post['title'];
  content?: Post['content'];
  authorEmail: User['email'];
}
