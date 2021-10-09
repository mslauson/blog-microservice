import * as mongoose from 'mongoose';
export interface Post extends mongoose.Document {
    string : mongoose.Schema.Types.ObjectId,
    author: String,
    postDate: Date,
    lastUpdated: Date,
    title: String,
    body: String,
}