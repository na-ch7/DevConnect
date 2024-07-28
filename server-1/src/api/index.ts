import { Router } from 'express';
import authController from './auth/auth.controller';
import projectController from './project/project.controller';
import userController from './user/user.controller';

export default (): Router => {
  const app = Router();
  app.use('/', userController());
  app.use('/auth', authController());
  app.use('/projects', projectController());
  return app;
};
