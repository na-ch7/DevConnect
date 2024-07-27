import {
  type NextFunction,
  type Request,
  type Response,
  Router,
} from 'express';
import { MESSAGES } from '../../shared/constants';
import {
  CreateProjectSchema,
  type CreateProjectSchemaType,
} from './project.schema';
import {
  handleCreateProject,
  handleGetAllProjects,
  handleGetProjectByNanoid,
  handleJoinTeam,
} from './project.service';

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const projectData: CreateProjectSchemaType = CreateProjectSchema.parse(
    req.body,
  );
  try {
    await handleCreateProject(projectData);
    res.status(200).json({
      success: true,
      message: MESSAGES.PROJECT_CREATED,
    });
  } catch (error) {
    next(error);
  }
};

export const joinTeam = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { projectCode } = req.body;
  try {
    await handleJoinTeam(projectCode);
    res.status(200).json({
      success: true,
      message: MESSAGES.JOIN_TEAM,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await handleGetAllProjects();
    res.status(200).json({
      success: true,
      message: MESSAGES.PROJECT_FETCHED,
    });
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await handleGetProjectByNanoid();
    res.status(200).json({
      success: true,
      message: MESSAGES.PROJECT_FETCHED,
    });
  } catch (error) {
    next(error);
  }
};

export default (): Router => {
  const app = Router();
  app.post('/create', createProject);
  app.post('/join', joinTeam);
  app.get('/', getAllProjects);
  app.get('/:nanoid', getProjectById);

  return app;
};
