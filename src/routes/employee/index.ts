import {
    Router,
    Request,
    Response
} from "express";
import { IUser } from "../../db/models/User";

const router: Router = Router();

// Import User database handler
import Functions from "../../db/models/User/functions";

/**
 * 
 * Add/remove/update/view employees

 /**
  * @description View endpoint. Literally fetches the list of employees
  */
router.get(`/`, async (req: Request, res: Response) => {
    try {
        // Fetch data from database
        const result: IUser[] = await Functions.getUsers();
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
        const result: IUser = await Functions.findUserById(id);
        res.json(result);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Add endpoint. Add a new employee.
 */
router.post(`/add`, (req: Request, res: Response) => {
    try{
        // Add new employee with the data came from the front side
        const result = Functions.create(req.body);
        res.json(result);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Update endpoint. Update certain employee's data
 */
router.patch(`/update/:id`, async (req:Request, res: Response) => {
    try{
        // Update the user data based on the update data
        const id: Number = parseInt(req.body.id);
        const doc: IUser = await Functions.findUserById(id);
        const updatedDoc: IUser = await Functions.update(doc, req.body);
        res.json(updatedDoc);
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

/**
 * @description Delete endpoint. Delete certain employee from the database.
 */
router.delete(`/delete`, (req: Request, res: Response) => {
    try{
        // Based on the system, use soft or hard delete to handle the deletion of an user
    } catch(e) {
        // Set the corresponding error code when returning error message
        res.status(404).send();
    }
});

export default router;

