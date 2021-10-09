import * as mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
  author: String,
  postDate: Date,
  lastUpdated: Date,
  title: String,
  body: String,
});
