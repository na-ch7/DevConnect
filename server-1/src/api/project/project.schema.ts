import { z } from "zod";

// Define the schema for a single project
export const ProjectSchema = z.object({
  project_name: z.string().min(1, { message: "Project name is required" }),
  description: z.string().min(1, { message: "Project description is required" }),
  project_tags: z.array(z.string()).optional(), // Tags are optional
  github_link: z.string().url({ message: "Invalid GitHub link" }).optional(), // GitHub link is optional
  max_members: z.number().int().min(2, { message: "Max members must be at least 2" }).optional(), // Max members is optional
  members: z.array(z.string()), 
  pending_members: z.array(z.string()).optional(), // Pending members are optional
  project_is_open: z.boolean(), // Boolean to indicate if the project is open
  project_likes: z.number().int().nonnegative({ message: "Likes must be a non-negative integer" }), // Number of likes must be non-negative
});

export const CreateProjectSchema = ProjectSchema.pick ({
    project_name: true,
    description: true,
    project_tags: true,
    github_link: true, 
    max_members: true,
})

// Define types for TypeScript inference
export type ProjectSchemaType = z.infer<typeof ProjectSchema>;
export type CreateProjectSchemaType = z.infer<typeof CreateProjectSchema>;
