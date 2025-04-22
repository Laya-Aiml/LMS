import mongoose from 'mongoose';

const courseProgressSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    courseld: {type: String, required: true},
    completed: {type: Boolean, default: false},
    lectureCompleted: []
}, {minimize: false });

export const CourseProgress = mongoose.model('CourseProgress', courseProgressSchema)