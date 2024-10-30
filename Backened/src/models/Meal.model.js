import mongoose from "mongoose";

const MealSchema = new mongoose.Schema(
  {
    meal_id: {
      type: String,
      required: true,
      unique: true,
    },
    meal_category: {
      type: Array,
      required: true,
    },
    mealName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Price: {
      type: String,
      required: true,
    },
    mealImage: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Meal = mongoose.model("meal", MealSchema);
