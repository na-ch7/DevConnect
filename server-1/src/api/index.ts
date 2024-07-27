import { Router } from 'express';
import authController from './auth/auth.controller';
import testController from './test/test.controller';

export default (): Router => {
  const app = Router();
  app.use('/test', testController());
  app.use('/auth', authController());
  return app;
};
