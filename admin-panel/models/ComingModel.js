import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        age: { type: Number, required: true },
        type: { type: String, required: true },
        duration: { type: String, required: true },
        startDate: { type: String, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const ComingModel = mongoose.models.Coming || mongoose.model("Coming", topicSchema);

export default ComingModel;