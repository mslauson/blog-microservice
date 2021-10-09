import * as mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
  string : mongoose.Schema.Types.ObjectId,
  author: String,
  postDate: Date,
  lastUpdated: Date,
  title: String,
  body: String,
});
