import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {

    try {
        const {student: studentData} = req.body
        // console.log(req.body)
        //will call service func to send this data
        const result = await StudentServices.createStudentIntoDB(studentData)
        //send response
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result
        })
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to create student',
            // error: err.message,
        });
    }
}

const getAllStudents = async(req: Request, res: Response) => {
    try{
        const result = await StudentServices.getAllStudentsFromDB()
        res.status(200).json({
            succcess: true,
            message: 'Students is retrieved succesfully',
            data: result
        })
    }catch(err){
        console.error('Error:', err);
        res.status(500).json({
            success: false,
            message: 'Failed to create student',
            // error: err.message,
        });
    }
}

export const StudentControllers = {
    createStudent, getAllStudents
}