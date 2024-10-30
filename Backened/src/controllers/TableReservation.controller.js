import { Table } from "../models/TableReservation.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import nodemailer from "nodemailer";

const TableData = asyncHandler(async (req, res) => {
  // Getting product Detail from frontend
  const {
    ReservationDate,
    ReservationTime,
    email,
    fullName,
    occassion,
    partySize,
    phoneNumber,
    request,
  } = req.body;

  try {
    // Checking validation
    if (
      !(
        ReservationDate &&
        ReservationTime &&
        email &&
        fullName &&
        occassion &&
        partySize &&
        phoneNumber
      )
    ) {
      throw new ApiError(400, "All fields are required!");
    }

    const tableData = await Table.create({
      ReservationDate,
      ReservationTime,
      email,
      fullName,
      occassion,
      partySize,
      phoneNumber,
      request,
    });

    return res
      .status(201)
      .json(new ApiResponse(201, tableData, "Table data sent successfully."));
  } catch (error) {
    console.error(error); // Log the error for debugging
    throw new ApiError(500, "Server error, please try again later");
  }
});
const GetTableData = asyncHandler(async (req, res) => {
  try {
    const getTableData = await Table.find({});
    if (!getTableData) {
      throw new ApiError(400, "Table Data Not found");
    }

    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          getTableData,
          "Table Data retrieve Successfully..."
        )
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

const DelTableData = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new ApiError(400, "Message ID is required... ...");
    }
    const delTableData = await Table.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json(
        new ApiResponse(200, delTableData, "Tabale data delete Successfully...")
      );
  } catch (error) {
    throw new ApiError(500, error);
  }
});

export { TableData, GetTableData, DelTableData };
