import express from 'express';
const router = express.Router();

import { userLogin } from '../controllers/userController.js';

router.route('/login').post(userLogin);

export default router;
