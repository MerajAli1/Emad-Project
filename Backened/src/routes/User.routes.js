import { Router } from "express";
import {
  DelUserInformation,
  GetUserInfomration,
  UserInformation,
} from "../controllers/User.controller.js";

const router = Router();

router.route("/user").post(UserInformation);
router.route("/getUser").get(GetUserInfomration);
router.route("/delUser/:id").delete(DelUserInformation);

export default router;
