import { Router } from "express";
import { upload } from "../middlewares/Multer.middleware.js";
import {
  DeleteMealCard,
  GetMealCard,
  MealCard,
  UpdateMealCard,
} from "../controllers/Meal.controller.js";

const router = Router();

router
  .route("/meal")
  .post(upload.fields([{ name: "image", maxCount: 1 }]), MealCard);

router.route("/getMeal").get(GetMealCard);
router.route("/updateMeal").put(UpdateMealCard);
router.route("/delMeal").delete(DeleteMealCard);
export default router;
