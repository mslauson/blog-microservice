import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Post } from "./interface/post.interface";

@Injectable()
export class PostService{
    constructor(
        @Inject('POST_MODEL')
        private postModel: Model<Post>
    ){}

    async findAll(): Promise<Post[]> {
        return this.postModel.find().exec();
    }
}