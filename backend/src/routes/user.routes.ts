import { getProfile, signIn, signUp } from "@/controllers/user.controller";
import { isAuth } from "@/middlewares/isAuth";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/auth/signin", signIn);
UserRouter.post("/auth/signup", signUp);
UserRouter.get("/profile", isAuth, getProfile);

export default UserRouter;
