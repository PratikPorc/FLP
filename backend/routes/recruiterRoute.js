// @ts-ignore
import express from "express";

const router = express.Router();

// import { FreelancerList, FreelancerID } from "../controllers/freelancerController.js";

// @ts-ignore
router.get("/", (req, res) => {
    res.send({ data: "Here is your data recruiter" });
});

// @ts-ignore
router.get("/id", (req, res) => {
    res.send({ data: "Data by id recruiter" });
});

export default router;
