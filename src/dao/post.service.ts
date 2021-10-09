import { Inject, Injectable } from "@nestjs/common";

@Injectable
export class PostService{
    constructor(
        @Inject('POST_MODEL')
        private postModel: Model<Post>
    )
}