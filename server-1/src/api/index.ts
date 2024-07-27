import { Router } from 'express';
import authController from './auth/auth.controller';
import projectController from './project/project.controller';
import testController from './test/test.controller';

export default (): Router => {
  const app = Router();
  app.use('/test', testController());
  app.use('/auth', authController());
  app.use('/projects', projectController());
  return app;
};
