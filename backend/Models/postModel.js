import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({
    title: { type: String },
    content: { type: String },
    like: { type: Number},
    comment:{ type: String},
    user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the current date/time
    }
})

const Post = mongoose.model('Post', PostSchema);

export default Post;