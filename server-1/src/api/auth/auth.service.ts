import bcrypt from "bcryptjs";
import { initializeClient } from "../../../../server/src/loaders/db";
import db from "../../../../server/src/loaders/db";
import { ERRORS, ROUNDS } from "../../../../server/src/shared/constants";
import { AuthSchema, UserAuthSchema } from "./auth.schema";
import generateToken from "../../../../server/src/middleware/jwt";

export async function handleSignUp({
  username,
  password,
  github_profile,
}: AuthSchema) {
  const db = await initializeClient();

  // Check if the user already exists
  const { data, error } = await db
    .from("users")
    .select("*")
    .eq("username", username);

    console.log("hi");
    console.log(data);
    console.log(error);

    if (error) {
        console.error("Error fetching user:", error);
        throw {
          statusCode: ERRORS.INTERNAL_SERVER_ERROR.statusCode,
          message: ERRORS.INTERNAL_SERVER_ERROR.message.error,
        };
      }
      if (data.length > 0) {
        throw {
          statusCode: ERRORS.USER_ALREADY_EXISTS.statusCode,
          message: ERRORS.USER_ALREADY_EXISTS.message.error,
        };
      }
  //hash the password
  const hash = await bcrypt.hash(password, ROUNDS);

  //Insert new user
  const { error: insertError } = await db.from("users").insert({
    username: username,
    password: hash,
    github_profile: github_profile,
  });
  
  if (insertError) {
    throw {
      statusCode: ERRORS.INTERNAL_SERVER_ERROR.statusCode,
      message: ERRORS.INTERNAL_SERVER_ERROR.message.error,
    };
  }
}

export async function handleLogin({
  username,
  password,
}: AuthSchema): Promise<string> {
  const db = await initializeClient();

  const { data, error } = await db
    .from("users")
    .select("*")
    .eq("username", username)
    .single();

    console.log("hi");
    console.log(data);
    console.log(error);

  if (!data) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.statusCode,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  const res = await bcrypt.compare(password, data.password);

  if (!res) {
    throw {
      statusCode: ERRORS.UNAUTHORIZED.statusCode,
      message: ERRORS.UNAUTHORIZED.message.error,
    };
  }
  return generateToken(username);
}
