import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        creator: {
            type: String
        },
        category: {
            type: String,
            required: true
        },
        tags: {
            type: [String]
        },
        img: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: new Date()
        },
        published: {
            type: Boolean,
            default: false
        },
        likes: {
            type: [String],
            default: []
        },

    },
    { timestamps: true }
);

export default mongoose.model("Post", PostSchema);