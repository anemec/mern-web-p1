import Box from '../models/boxModel.js';
import asyncHandler from 'express-async-handler';

const getBoxes = asyncHandler(async (req, res) => {
  const boxes = await Box.find({});

  res.json(boxes);
});

// @desc Fetch single box
// @route GET /api/boxes/:id
// @access Public
const getBoxById = asyncHandler(async (req, res) => {
  const box = await Box.findById(req.params.id);

  if (box) {
    res.json(box);
  } else {
    res.status(400);
    throw new Error('Product not found');
  }
});

export { getBoxes, getBoxById };
