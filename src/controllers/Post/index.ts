import {
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  QueryParams,
  NotFoundError,
  JsonController,
} from "routing-controllers";
import { Post as PostClass, PostBody, PostQuery } from "../../Validation/Post";
import PostService from "../../services/PostService";

@JsonController("/post")
export class PostController {
  @Get()
  async getAll(@QueryParams() query: PostQuery) {
    const posts = await PostService.findAllPost(query.limit, query.offset);
    if (posts.length === 0) throw new NotFoundError("Posts are not available");
    return posts;
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    const post = await PostService.findPostById(+id);
    if (!post.id) throw new NotFoundError("Post is not available");
    return post;
  }

  @Post()
  async create(@Body() body:PostClass){
    return PostService.createPost(body)
  }

  @Put("/:id")
  async update(@Body() body: PostBody, @Param('id') id: string) {
    return PostService.updatePost(body, +id)
  }

  @Delete('/:id')
  async delete(@Param('id') id:string){
    const res = await PostService.deletePost(id)
    if(!res.ok) throw new NotFoundError("Post is not available");
    return {message: "Post deleted Successfully"}
  }

}
