import express from 'express';
import { checkAuth, login, signup, updateProfile } from '../../../server/controllers/userController.js';
import { protectRoutes } from '../../../server/middleware/auth.js';

const userRoutes = express.Router();

userRoutes.post("/signup",signup);
userRoutes.post("login",login);
userRoutes.put("/update-profile",protectRoutes,updateProfile);
userRoutes.get("/check",protectRoutes,checkAuth);

export default userRoutes;