import supabase from '@/loaders/db';
import { nanoid } from 'nanoid';
import { ERRORS } from '../../shared/constants';
import { UserSchema } from '../auth/auth.schema';
import type {
  CreateProjectSchemaType,
  ProjectSchemaType,
} from './project.schema';

export async function createProjectCode(length: number): Promise<string> {
  return nanoid(length);
}

export async function handleCreateProject(
  projectData: CreateProjectSchemaType,
) {
  const projectCode = await createProjectCode(10);

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

  const formattedProject: Omit<ProjectSchemaType, 'project_tags'> & {
    project_tags?: string | null;
  } = {
    ...newProject,
    project_tags: newProject.project_tags?.join(',') ?? null,
  };

  const { data, error } = await supabase
    .from('projects')
    .insert([formattedProject]);

  if (error) {
    throw {
      statusCode: ERRORS.INTERNAL_SERVER_ERROR.statusCode,
      message: ERRORS.INTERNAL_SERVER_ERROR.message.error,
    };
  }
  return projectCode;
}

export async function handleGetProjectByNanoid(projectCode: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('projectCode', projectCode)
    .single();

  if (error) {
    throw {
      statusCode: ERRORS.PROJECT_NOT_FOUND.statusCode,
      message: ERRORS.PROJECT_NOT_FOUND.message.error,
    };
  }
  return data;
}

export async function handleGetAllProjects() {
  const { data, error } = await supabase.from('projects').select('*');

  if (error) {
    throw {
      statusCode: ERRORS.PROJECT_NOT_FOUND.statusCode,
      message: ERRORS.PROJECT_NOT_FOUND.message.error,
    };
  }
  return data;
}

export async function handleJoinTeam(projectCode: string, username: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('projectCode', projectCode)
    .single();

  if (!data?.isOpen) {
    throw {
      statusCode: ERRORS.TEAM_CLOSED.statusCode,
      message: ERRORS.TEAM_CLOSED.message.error,
    };
  }

  const isMember = await checkUserTeam(username, projectCode);
  if (isMember) {
    throw {
      statusCode: ERRORS.USER_ALREADY_MEMBER.statusCode,
      message: ERRORS.USER_ALREADY_MEMBER.message.error,
    };
  }
  if (data?.members?.length === data?.max_members) {
    closeTeam;
    throw {
      statusCode: ERRORS.TEAM_FULL.statusCode,
      message: ERRORS.TEAM_FULL.message.error,
    };
  }
  const updatedMembers = [...(data.members || []), username];
  const { error: updateError } = await supabase
    .from('projects')
    .update({ members: updatedMembers })
    .eq('project_code', projectCode);
}

export async function checkUserTeam(username: string, projectCode: string) {
  const { data, error } = await supabase
    .from('projects')
    .select('members')
    .eq('projectCode', projectCode)
    .single();

  if (error) {
    throw {
      statusCode: ERRORS.INTERNAL_SERVER_ERROR.statusCode,
      message: ERRORS.INTERNAL_SERVER_ERROR.message.error,
    };
  }
  if (!data) {
    throw {
      statusCode: ERRORS.PROJECT_NOT_FOUND.statusCode,
      message: ERRORS.PROJECT_NOT_FOUND.message.error,
    };
  }
  const members = data.members || [];
  const isMember = members.includes(username);
  return isMember;
}

export async function closeTeam(nanoid: string) {
  const { data, error } = await supabase
    .from('projects')
    .update({ isOpen: false })
    .eq('project_code', nanoid);
}
