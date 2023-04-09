import { IsInt, IsString } from "class-validator";

export class PostQuery {
  @IsInt()
  limit: number | undefined;

  @IsInt()
  offset!: number | undefined;
}

export class Post {
  @IsInt()
  userId!: number;

  @IsString()
  title!: string;

  @IsString()
  body!: string;
}

export class PostBody extends Post {
  @IsInt()
  id!: number;
}
