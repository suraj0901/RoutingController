import { IsInt, IsString } from "class-validator";

export class PostQuery {
  @IsInt() 
  limit!: number;

  @IsInt()
  offset!: number;
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
