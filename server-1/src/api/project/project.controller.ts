import { Request, Response, NextFunction, Router } from "express";
import { handleCreateProject } from "./project.service";
import { MESSAGES } from "../../shared/constants";
import { CreateProjectSchema, CreateProjectSchemaType } from "./project.schema";

export const createProject = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    const projectData: CreateProjectSchemaType = CreateProjectSchema.parse(req.body);
    try {
      await handleCreateProject(projectData);
      res.status(200).json({
        success: true,
        message: MESSAGES.SIGNED_IN,
      });
    } catch (error) {
      next(error);
    }
  };

export default (): Router => {
    const app = Router();
    app.post("/Project", createProject);

    return app;
  };
  