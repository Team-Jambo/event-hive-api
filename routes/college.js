import {Router} from "express";
import { deleteColleges, getCollege, getColleges, patchColleges, postColleges } from "../controllers/college.js";
import {remoteUpload} from "../middlewares/upload,js"

//Create Router
const collegeRouter = Router();



//Define Router
collegeRouter.get('/college', getColleges);


collegeRouter.get('/college/:id', getCollege);


collegeRouter.post('/college', remoteUpload.single('image'),postColleges);


collegeRouter.patch('/college/id', patchColleges);


collegeRouter.delete('/college/:id', deleteColleges)


//export Router
export default collegeRouter;