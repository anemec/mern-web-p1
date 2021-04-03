import Box from "../models/boxModel.js";
import asyncHandler from "express-async-handler";

export const getBoxes = asyncHandler(async (req, res) => {
  const boxes = await Box.find({});

  res.json(boxes);
});
