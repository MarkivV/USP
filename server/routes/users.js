import express from "express";
import {register} from "../controllers/Auth";

const router = express.Router();



router.get("/:id")
router.delete("/:id")
router.put("/:id")
router.post("/", register)


export default router;
