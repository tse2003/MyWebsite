import mongoose, { Schema, Document, Model } from "mongoose";

interface ITopic extends Document {
    title: string;
    image: string;
    age: number;
    type: string;
    duration: string;
    startDate: string;
    description: string;
}

const topicSchema = new Schema<ITopic>(
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

const ComingModel: Model<ITopic> = mongoose.models.Coming || mongoose.model<ITopic>("Coming", topicSchema);

export default ComingModel;
