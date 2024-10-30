import { Router } from "express";
import {
  DelCheckoutData,
  CheckoutData,
  GetCheckoutData,
} from "../controllers/Checkout.controller.js";

const router = Router();

router.route("/checkout").post(CheckoutData);
router.route("/getcheckout").get(GetCheckoutData);
router.route("/delcheckout/:id").delete(DelCheckoutData);

export default router;
