import { Table } from "../models/TableReservation.model.js";
import { User } from "../models/User.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const UserInformation = asyncHandler(async (req, res) => {
  try {
    //Getting User Detail from frontend
    const { fullName, phoneNumber, email, Occassion, SpecialRequest } =
      req.body;

    //checking validation
    if (!(fullName && phoneNumber && email && Occassion)) {
      throw new ApiError(400, "All Fields are required..!");
    }

    const user = await User.create({
      fullName,
      phoneNumber,
      email,
      Occassion,
      SpecialRequest,
    });

    return res
      .status(201)
      .json(
        new ApiResponse(200, user, "Reservor Detail upload successfully...")
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

const GetUserInfomration = asyncHandler(async (req, res) => {
  try {
    const getUser = await User.find({});
    if (!getUser) {
      throw new ApiError(400, "User Data Not found");
    }
    return res
      .status(201)
      .json(
        new ApiResponse(200, getUser, "User Data retrieve Successfully...")
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

const DelUserInformation = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, "Message ID is required... ...");
    }

    const delUserData = await User.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(200, delUserData, "User data delete Successfully...")
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

export { UserInformation, GetUserInfomration, DelUserInformation };
