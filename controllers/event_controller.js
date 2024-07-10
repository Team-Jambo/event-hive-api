import { EventModel } from "../model/event_model.js";


export const getEvents = async (req, res, next) => {
    try {
        // Get query
        const { limit, skip, filter } = req.query;
        // Get all event from database
        const allEvents = await EventModel
            .find(JSON.parse(filter))
            .limit(limit)
            .skip(skip);
        // Return all events as response
        res.json(allEvents);
    } catch (error) {
        next(error);
    }
};

//    Post All Event
export const postEvent = async (req, res, next) => {
    try {
        // add Event to database
        const newEvent = await EventModel.create({
            ...req.body,
            banner: req.file.filename
        });


        // Return response
        res.json(newEvent);
    } catch (error) {
        next(error);
    }
};

// Patch event 
export const patchEvent = async (req, res,) => {
    try {
        // Update Event by Id
        const updateEvent = await EventModel.findByIdAndUpdate(req.params.id, req.body, { new: true });;

        // Return response
        res.json(updateEvent);
    } catch (error) {
        next(error)
    }

}

// Delete Event (personal trying)
export const deleteEvent = async (req, res, next) => {
    try {
        // Delete event
        const deletedEvent = await EventModel.findByIdAndDelete(req.params.id);
        // Return response
        res.json(deletedEvent)
    } catch (error) {
        next(error);
    }
};

// Another get Event
export const getEvent = (req, res) => {
    res.json(`only event ending with ID of ${req.params.key} is showing`);

};