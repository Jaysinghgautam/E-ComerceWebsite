import express from "express";
import { addProduct, listProducts, removeProduct, singleProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/add", addProduct);
router.get("/list", listProducts);
router.post("/remove", removeProduct);
router.post("/single", singleProduct);

export default router;