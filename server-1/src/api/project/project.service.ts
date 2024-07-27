import supabase from '@/loaders/db';
import { nanoid } from 'nanoid';
import { ERRORS } from '../../shared/constants';
import type { CreateProjectSchemaType, ProjectSchemaType } from './project.schema';

export async function createProjectCode(length: number): Promise<string> {
  return nanoid(length);
}

export async function handleCreateProject(projectData: CreateProjectSchemaType) {
  const projectCode = await createProjectCode(10); // Await the promise

  if (!projectCode) {
    throw {
      statuscode: 200,
    };
  }

  const newProject: ProjectSchemaType = {
    ...projectData,
    projectCode: projectCode,
    members: [] as string[],
    pending_members: [] as string[],
    isOpen: true,
    likes: 0,
  };

  const formattedProject: Omit<ProjectSchemaType, 'project_tags'> & { project_tags?: string | null } = {
    ...newProject,
    project_tags: newProject.project_tags?.join(',') ?? null,
  };

  const { data, error } = await supabase.from('projects').insert([formattedProject]);

  if (error) {
    console.log(error);
    throw {
      statusCode: ERRORS.INTERNAL_SERVER_ERROR.statusCode,
      message: ERRORS.INTERNAL_SERVER_ERROR.message.error,
    };
  }

  return data;
}

export async function handleGetProjectByNanoid() {}

export async function handleGetAllProjects() {}

export async function handleJoinTeam(teamCode: string) {}
