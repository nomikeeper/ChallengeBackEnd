import Review, { IReview } from ".";
import util from "../../util";
import { IUser } from "../User";

export default {
    getReviews: async (): Promise<IReview[]> => {
        const query = Review.find();
        const result: IReview[] = await util.queryHandler(query) as IReview[];
        return result;
    },
    findReviewById: async (id: Number): Promise<IReview> => {
        // Get review
        const query = Review.findById(id);
        const result: IReview = await util.queryHandler(query) as IReview;
        return result;
    },
    create: async (data: IReview) => {
        const result = Review.create({
            comment: data.comment,
            reviewers: data.reviewers,
            of: data.of
        });
        return result;
    },
    update: async (doc: IReview, data: Partial<IReview>): Promise<IReview> => {
        doc.comment = data.comment ? data.comment : doc.comment;
        doc.reviewers = data.reviewers ? data.reviewers : doc.reviewers;
        doc.of = data.of ? data.of : doc.of;
        return doc.save();
    },
    addAssignee: async (doc: IReview, assignee: IUser): Promise<IReview> =>  {
        doc.reviewers.push(assignee);
        return doc.save();
    },
    deleteById: async (id: Number): Promise<IReview | null> => {
        // return the deleted review for reference
        const query =  Review.findByIdAndDelete(id);
        const result: IReview = await util.queryHandler(query) as IReview;
        return result;
    },
    deleteMany: async (docs: IReview[]): Promise<IReview[]> => {
        // return the deleted reviews for reference
        const query =  Review.deleteMany(docs);
        const result: IReview[] = await util.queryHandler(query) as IReview[];
        return result;
    }
}