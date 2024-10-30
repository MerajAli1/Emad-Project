import { Meal } from "../models/Meal.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";

const MealCard = asyncHandler(async (req, res) => {
  // Getting product Detail from frontend
  const { meal_id, meal_category, mealName, Description, Price } = req.body;

  // Checking validation
  if (!(meal_id && meal_category && mealName && Description && Price)) {
    throw new ApiError(400, "All fields are required!");
  }

  // Validation For Unique Product Id
  const existingMeal_id = await Meal.findOne({ meal_id: meal_id });
  if (existingMeal_id) {
    throw new ApiError(400, "Meal_id must be unique.");
  }

  // Image Handling
  const imageLocalPath = req.files?.image?.[0]?.path;
  if (!imageLocalPath) {
    throw new ApiError(400, "meal_image is required.");
  }

  // Upload on Cloudinary
  const meal_image = await uploadOnCloudinary(imageLocalPath);
  if (!meal_image) {
    throw new ApiError(400, "image field is required.");
  }

  // Sending to Database
  const meal = await Meal.create({
    meal_id,
    meal_category,
    mealName,
    Description,
    Price,
    meal_image: meal_image,
  });

  // Sending to Frontend
  return res
    .status(201)
    .json(new ApiResponse(201, meal, "New meal uploaded successfully."));
});

const GetMealCard = asyncHandler(async (req, res) => {
  const getMeal = await Meal.find({});

  return res
    .status(200)
    .json(new ApiResponse(200, getMeal, "Meal retreive successfully.."));
});

const UpdateMealCard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  const MealUpdate = await Meal.findByIdAndUpdate(id, update, { new: true });

  return res
    .status(200)
    .json(new ApiResponse(200, MealUpdate, "Meal Updated successfully.."));
});

const DeleteMealCard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const MealDel = await Meal.findByIdAndDelete({ _id: id });
  return res
    .status(200)
    .json(new ApiResponse(200, MealDel, "Meal Deleted successfully.."));
});

export { MealCard, GetMealCard, UpdateMealCard, DeleteMealCard };
