import {
    Router,
    Request,
    Response
} from "express";
// Importing Employee endpoints
import EmployeeRouter from "./employee";
import ReviewRouter from "./review";

const router: Router = Router();

/**
* Bind Employee router
* @Description Enployee endpoint which is defined as ./api/employee
*/
router.use('/employee', EmployeeRouter);

/**
* Bind Review router
* @Description Review endpoint which is defined as ./api/review
*/
router.use('/review', ReviewRouter);

router.get(`/`, (req:Request, res: Response) => {
    res.send("API v.0.1");
});

export default router;