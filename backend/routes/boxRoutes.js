import express from 'express';
const router = express.Router();

import { getBoxes, getBoxById } from '../controllers/boxController.js';

router.route('/').get(getBoxes);
router.route('/:id').get(getBoxById);

export default router;
