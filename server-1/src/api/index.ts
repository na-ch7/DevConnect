import { Router } from 'express';
import testController from './test/test.controller';
import authController from './auth/auth.controller';

export default (): Router => {
  const app = Router();
  app.use('/test', testController());
  app.use('/auth', authController());
  return app;
};
