import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    BlogContent: { type: String },
    author:{type: String},
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the current date/time
    }
})

const Blog = mongoose.model('Blog', BlogSchema);

export default Blog;