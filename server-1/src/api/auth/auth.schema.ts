import { tuple, z } from 'zod';

export const UserSchema = z.object({
  username: z
    .string()
    .min(6, { message: 'Username must be atleast 6 characters' }),
  password: z
    .string()
    .min(6, { message: 'Password must be atleast 6 characters' }),
  projects_created: z.array(
    z.object({
      projectCode: z.string(),
    }),
  ),
  projects_joined: z.array(
    z.object({
      projectCode: z.string(),
    }),
  ),
  github_profile: z.string(),
});

export const UserAuthorizationSchema = UserSchema.pick({
  username: true,
  password: true,
});

export const CreateUserSchema = UserSchema.pick({
  username: true,
  password: true,
  github_profile: true,
});

export type AuthSchema = z.infer<typeof UserAuthorizationSchema>;
export type UserAuthSchema = z.infer<typeof UserSchema>;
export type CreateUserSchema = z.infer<typeof CreateUserSchema>;
