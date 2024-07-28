import { MESSAGES } from '@/shared/constants';
import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from 'express';
import { handleGetProfile } from './user.service';

export const getProfile = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = await handleGetProfile;
    res.status(200).json({
      success: true,
      message: MESSAGES.PROJECT_FETCHED,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export default (): Router => {
  const app = Router();
  app.get('/');
  return app;
};
