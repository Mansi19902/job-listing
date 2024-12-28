import express from "express";
import {
  changeJobApplicationsStatus,
  changeVisiblity,
  getCompanyData,
  getCompanyJobApplicants,
  getCompanyPostedBy,
  loginCompany,
  postJob,
  registerCompany,
} from "../controller/companyController.js";
import upload from "../config/multer.js";
import { protectCompany } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register",upload.single("image"), registerCompany);

router.post("/login", loginCompany);
router.get("/company",protectCompany,getCompanyData);
router.post("/post-job",protectCompany, postJob);
router.get("/applicants", protectCompany, getCompanyJobApplicants);
router.get("/list-jobs",protectCompany, getCompanyPostedBy);
router.post("/change-status",protectCompany, changeJobApplicationsStatus);
router.post("/change-visiblity",protectCompany, changeVisiblity);

export default router;
