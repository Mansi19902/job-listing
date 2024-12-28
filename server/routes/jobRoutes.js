import express from "express";
import { getJobById, getJobs } from "../controller/jobController.js";

const router = express.Router();

//Route for all jobs data
router.get("/", getJobs);

router.get("/:id", getJobById);

export default router;
