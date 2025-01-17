import express from 'express';
import StudentController from '../controllers/studentcontrollers.js';
import ProgressController from '../controllers/ProgressController.js';
import { authenticate } from '../middlewares/auth.js'; // Authentication middleware
import { requireRole } from '../middlewares/roleMiddleware.js'; // Role middleware

const router = express.Router();

// Ensure user is authenticated and has the 'student' role
router.use(authenticate);
router.use(requireRole('student'));

// Enroll in a course
router.post('/enroll', StudentController.enrollCourse);

// Get all enrolled courses
router.get('/courses', StudentController.getEnrolledCourses);

// search for course
router.get('/search/:query?', StudentController.searchCourse);

// view all courses "for dashboard"
router.get('/dashboard', StudentController.viewAllCourse);

// get specife course
router.get('/enrollment-status/:courseId?', StudentController.checkEnrollment);

// show your course
router.get('/course/content/:courseId', StudentController.GetContent);

// Update course progress
router.post('/submit-quize', ProgressController.PostProg);

export default router;
