import supabase from '@/loaders/db';
import { ERRORS } from '@/shared/constants';

export async function handleGetProfile(username: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .single();

  if (error) {
    throw {
      statusCode: ERRORS.USER_NOT_FOUND.statusCode,
      message: ERRORS.USER_NOT_FOUND.message.error,
    };
  }
  return data;
}
