import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
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

const TimeModel = mongoose.models.Time || mongoose.model("Time", topicSchema);

export default TimeModel;