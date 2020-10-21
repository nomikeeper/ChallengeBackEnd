import {
    Router,
    Request,
    Response
} from "express";
import { IReview } from "../../db/models/Review";
import { IUser } from "../../db/models/User";

const router: Router  = Router();

// Import medium functions for database
import Functions from "../../db/models/Review/functions";
import UserFunctions from "../../db/models/User/functions";

/**
 * 
 * Add/update/view performance reviews
 * Assign employees to participate in another employee's performance review
 */

/**
 * @description Get review endpoint. Get all review.
 */
router.get(`/`, async (req: Request, res: Response) => {
    try{
        const result: IReview[] = await Functions.getReviews();
        res.json(result);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Get review endpoint. Get certain review.
 */
router.get(`/:id`, async (req: Request, res: Response) => {
    try{
        const id: Number = parseInt(req.params.id, 10);
        const result: IReview = await Functions.findReviewById(id);
        res.json(result);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Add endpoint. Add a new review.
 */
router.post(`/add`, async (req: Request, res: Response) => {
    try{
        // Add new review with the data came from the front side
        const result: IReview = await Functions.create(req.body);
        res.json(result);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Update endpoint. Update certain review.
 */
router.patch(`/update/:id`, async (req: Request, res: Response) => {
    try{
        // Update the user data based on the update data
        const id: Number = parseInt(req.params.id);
        const doc: IReview = await Functions.findReviewById(id);
        const updatedDoc: IReview = await Functions.update(doc, req.body);
        res.json(updatedDoc);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Assisgn Employee to a certain review
 */
router.post(`/assign`, async (req: Request, res: Response) => {
    try{
        // Assign employee to review
        // In order to avoid implications it's better to use the reviewId in the body instead of setting it as queryString
        const doc: IReview = await Functions.findReviewById(req.body.reviewId);
        // Get the user data
        const assignee: IUser = await UserFunctions.findUserById(req.body.assigneeId);
        const updatedDoc: IReview = await Functions.addAssignee(doc, assignee);
        res.json(updatedDoc);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

export default router;