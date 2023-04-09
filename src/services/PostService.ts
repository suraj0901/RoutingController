import { PostBody, Post } from "../Validation/Post";
import {NotFoundError} from "routing-controllers"

class PostService {
  static URL = `https://jsonplaceholder.typicode.com/posts`;
  static async findAllPost(limit: number = 10, offset: number = 0) {
    const res = await fetch(this.URL);
    const posts: PostBody[] = await res.json();
    return posts.slice(offset, offset + limit);
  }
  static async findPostById(id: number) {
    const res = await fetch(`${this.URL}/${id}`);
    const post: PostBody = await res.json();
    return post;
  }
  static async createPost(body:Post) {
    const res = await fetch(this.URL, {
      method:"POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(body)
    })
    const post:PostBody = await res.json()
    return post
  }
  static async updatePost(body: PostBody, id: number) {
    const res = await fetch(`${this.URL}/${id}`, {
      method:"PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if(!res.ok) throw new NotFoundError("Post is not available")

    const post: PostBody = await res.json();
    return post;
  }

  static async deletePost(id:string){
    return await fetch(`${this.URL}/${id}`, {method:"DELETE"})
  }
}

export default PostService;
