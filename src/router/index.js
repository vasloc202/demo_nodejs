import { Router } from "express";
import { create, getAll } from "../controllers/product";
const router = Router();

router.get("/products", getAll);
router.post("/products", create);

export default router;