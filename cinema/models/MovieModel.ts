import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the movie document
interface IMovie extends Document {
    title: string;
    image: string;
    age: number;
    type: string;
    duration: string;
    description: string;
}

// Define the schema with the interface applied
const topicSchema = new Schema<IMovie>(
    {
        title: { type: String, required: true },
        image: { type: String, required: true },
        age: { type: Number, required: true },
        type: { type: String, required: true },
        duration: { type: String, required: true },
        description: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

// Define the model with proper typing
const MovieModel: Model<IMovie> = mongoose.models.Movie || mongoose.model<IMovie>("Movie", topicSchema);

export default MovieModel;
