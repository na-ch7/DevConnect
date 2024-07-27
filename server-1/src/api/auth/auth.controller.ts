import { handleLogin, handleSignUp } from "./auth.service";
import { Request, Response, NextFunction, Router } from "express";
import { MESSAGES } from "../../../../server/src/shared/constants";

export const handleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password, github_profile} = req.body;
  try {
    await handleSignUp({ username, password, github_profile});
    res.status(200).json({
      success: true,
      message: MESSAGES.SIGNED_IN,
    });
  } catch (error) {
    next(error);
  }
};

export const handleUserLogin = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password, github_profile } = req.body;
  try {
    const token = await handleLogin({ username, password, github_profile });
    res.status(200).json({
      success: true,
      message: MESSAGES.LOGGED_IN,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export default (): Router => {
  const app = Router();
  app.post("/signup", handleUser);
  app.post("/login", handleUserLogin);
  return app;
};
