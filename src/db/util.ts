import { CreateQuery, Document, Query } from "mongoose";
import { IUser } from "./models/User";
import { IReview} from "./models/Review";
export default {
    queryHandler: (query: any): Promise<IReview | IReview[] | IUser | IUser[]>  => {
        return new Promise((resolve, reject) => {
            query.exec((err: Error, docs: IReview | IReview[] | IUser | IUser[]) => {
                if(err)
                    reject(err);
                resolve(docs);
            })
        })
    }
}