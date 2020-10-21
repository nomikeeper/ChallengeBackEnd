import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "../User";

const ReviewSchema = new Schema({
    comment: String,
    reviewers: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    of: {
            type: Schema.Types.ObjectId,
            ref: "User"
    }
})

export interface IReview extends Document {
    comment: String,
    reviewers: IUser[],
    of: IUser
}

export default mongoose.model<IReview>("Review", ReviewSchema);