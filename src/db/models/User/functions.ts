import User, { IUser } from ".";
import util from "../../util";
import { IReview } from "../Review";

export default {
    getUsers: async () => {
        // Get all users
        const query = User.find();
        const result: IUser[] = await util.queryHandler(query) as IUser[];
        return result;
    },
    findUserById: async (id:Number): Promise<IUser> => {
        // Get a user
        const query = User.findById(id);
        const result: IUser = await util.queryHandler(query) as IUser;
        return result;
    },
    create: async (data: IUser) => {
        const result = User.create({
            name: data.name,
            rating: data.rating
        });
        return result;
    },
    update: async (doc: IUser, data: Partial<IUser>) => {
        doc.name = data.name ? data.name : doc.name;
        doc.rating = data.rating ? data.rating : doc.rating;
        return doc.save();
    },
    deleteById: async (id: Number) => {
        // return the deleted user for reference
        const query = User.findByIdAndDelete(id);
        const result = await util.queryHandler(query) as IUser;
        return result;
    },
    deleteMany: async (docs: IUser[]) => {
        // return the deleted users for reference
        const query = User.deleteMany(docs);
        const result: IUser[] = await util.queryHandler(query) as IUser[];
        return result;
    }
}