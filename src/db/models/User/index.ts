import mongoose, { Document, Schema } from "mongoose";

const UserSchema = new Schema({
    name: String!,
    rating: Number
});

export interface IUser extends Document {
    name: String,
    rating: Number
}

export default mongoose.model<IUser>("User", UserSchema);