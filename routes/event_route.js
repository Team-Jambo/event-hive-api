import { Router } from "express";
import { getEvents, patchEvent, postEvent, deleteEvent, getEvent } from "../controllers/event_controller.js";
import { remoteUpload } from "../middlewares/uploads.js";   

// create router
const eventRouter = Router();

// Define routers
eventRouter.get('/events', getEvents);

eventRouter.post('/events', remoteUpload.single('banner'), postEvent); 

eventRouter.patch('/events/:id', patchEvent); 

eventRouter.delete('/events/:id', deleteEvent); 

eventRouter.get('/events/:id', getEvent); 

// Export router
export default eventRouter;
