"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: { type: String, required: [true, "First name is required"] },
    middleName: { type: String },
    lastName: { type: String, required: [true, "Last name is required"] },
});
const guardinSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: [true, "father name is required"] },
    fatherOccupation: {
        type: String,
        required: [true, "father occuaption is required"],
    },
    fatherContactNo: {
        type: String,
        required: [true, "fathe contact no is required"],
    },
    motherName: { type: String, required: [true, "motehr name is required"] },
    motherOccupation: {
        type: String,
        required: [true, "mother occupation is required"],
    },
    motherContactNo: {
        type: String,
        required: [true, "mother contact no is required"],
    },
});
const localGuardianSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "local guardian name is required"] },
    occupation: {
        type: String,
        required: [true, "local guardian occuaption is required"],
    },
    contactNo: {
        type: String,
        required: [true, "locan guardian contact no is required"],
    },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: userNameSchema, required: [true, "student name is required"] },
    gender: {
        type: String,
        enum: {
            values: ["male", "female", "other"],
            message: "gender must be in between on of these - 'male', 'female', 'other'",
        },
        required: true,
    },
    dateOfBirth: {
        type: String,
        required: [true, "student date of birth is required"],
    },
    email: { type: String, required: [true, "student email is required"] },
    contactNo: {
        type: String,
        required: [true, "student contact no is required"],
    },
    emergencyContactNo: {
        type: String,
        required: [true, "student emergency contact no is required"],
    },
    bloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: {
        type: String,
        required: [true, "present address required"],
    },
    permanentAddtess: {
        type: String,
        required: [true, "permanent address required"],
    },
    guardian: guardinSchema,
    localGuardian: {
        type: localGuardianSchema,
        required: [true, "local guardian is required"],
    },
    profileImage: { type: String },
    isActive: { type: String, enum: ["active", "blocked"], default: "active" },
});
exports.StudentModel = (0, mongoose_1.model)("Student", studentSchema);
