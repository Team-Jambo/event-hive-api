import { CollegeModel } from "../model/college.js";

export const getColleges = async(re,res,next)=>{
    try {
        //Get query params
        const{limit,skip,filter}=req.query;

        //Get all colleges from database
        const allColleges = await CollegeModel
            .find(filter)
            .limit(limit)
            .skip(skip)

        //Return all colleges as response
        res.status(200).json(allColleges);
    } catch (error) {
        next(error)
    }
};


//Post colleges
export const postColleges = async (res, req, next)=>{
    try {
        //Add a college
        const postACollege = await CollegeModel.create(
            {
                ...req.body,
            Image:req.file.filename});

    } catch (error) {
        if (error.errorResponse.code === 8001){return res.status(401).send('Fill the name or any other fields')
        }
    }
};

//Patch Colleges

export const patchColleges =async (req,res,next)=>{
    try {
      //update colleges by id
      const updateCollege= await CollegeModel.findByIdAndUpdate(req.params.id, req.body, {new:true})


      //Return response
      res.status(200).json(updateCollege)
    } catch (error) {
        next(error)
    }
};

//Delete College

export const deleteColleges= async(req, res,next) =>{
    try {
        //delete college by id
        const deleteOneCollege = await CollegeModel.findByIdAndDelete(req.params.id)

        //Response
        res.status(200).json(deleteOneCollege)
    } catch (error) {
        
    }
};



//Get college by Id
export const getCollege = async(req, res, next)=>{
    try {
        //Get college by id
        const getOneCollege = await CollegeModel.findById(req.params.id)


        //Return response
        res.status(200).json(getOneCollege)
    } catch (error) {
        
    }
};