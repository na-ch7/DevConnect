import bcrypt from 'bcryptjs';

import db from '../../loaders/db';
import supabase from '../../loaders/db';
import generateToken from '../../middlewares/jwt';
import { ERRORS, ROUNDS } from '../../shared/constants';
import { Database } from '../../types/supabase';
import { type AuthSchema, UserAuthSchema,  CreateUserSchema } from './auth.schema';

export async function handleSignUp({
  username,
  password,
  github_profile,
}: CreateUserSchema) {
  // Check if the user already exists
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username);

  if (error) {
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
  const { error: insertError } = await db.from('users').insert({
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
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (!data) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.statusCode,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  const pswd = data.password;
  if (typeof pswd !== 'string') {
    throw {
      statusCode: ERRORS.INTERNAL_SERVER_ERROR.statusCode,
      message: ERRORS.INTERNAL_SERVER_ERROR.message.error,
    };
  }
  
  const res = bcrypt.compare(pswd, password);

  if (!res) {
    throw {
      statusCode: ERRORS.UNAUTHORIZED.statusCode,
      message: ERRORS.UNAUTHORIZED.message.error,
    };
  }
  
  return generateToken(username);
}
