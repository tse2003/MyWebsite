import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the time document
interface ITime extends Document {
    title: string;
    image: string;
    date: string;
    branch1: string | null;
    time1: string | null;
    branch2: string | null;
    time2: string | null;
    branch3: string | null;
    time3: string | null;
    branch4: string | null;
    time4: string | null;
    branch5: string | null;
    time5: string | null;
    branch6: string | null;
    time6: string | null;
}

// Define the schema with the interface applied
const topicSchema = new Schema<ITime>(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        date: { type: String, required: true },
        branch1: { type: String, required: true, default: null },
        time1: { type: String, required: true, default: null },
        branch2: { type: String, required: true, default: null },
        time2: { type: String, required: true, default: null },
        branch3: { type: String, required: true, default: null },
        time3: { type: String, required: true, default: null },
        branch4: { type: String, required: true, default: null },
        time4: { type: String, required: true, default: null },
        branch5: { type: String, required: true, default: null },
        time5: { type: String, required: true, default: null },
        branch6: { type: String, required: true, default: null },
        time6: { type: String, required: true, default: null },
    },
    {
        timestamps: true,
    }
);

// Define the model with proper typing
const TimeModel: Model<ITime> = mongoose.models.Time || mongoose.model<ITime>("Time", topicSchema);

export default TimeModel;
