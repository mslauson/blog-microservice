import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  id: ObjectId;
  @Prop()
  author: String;
  @Prop()
  postDate: Date;
  @Prop()
  lastUpdated: Date;
  @Prop()
  title: String;
  @Prop()
  body: String;
}

export const PostSchema = SchemaFactory.createForClass(Post);
