export const JWT_EXPIRY = {
  expiresIn: '2d',
};

export const ROUNDS = 10;

export const MESSAGES = {
  SIGNED_IN: 'User Signed Up Successfully',
  LOGGED_IN: 'User Logged in Successfully',
};

export const ERRORS = {
  INTERNAL_SERVER_ERROR: {
    statusCode: 500,
    message: {
      error: 'Internal Server Error',
      error_description: 'Something went wrong',
    },
  },
  USER_NOT_FOUND: {
    statusCode: 404,
    message: {
      error: 'User not Signed Up',
      error_description: "User doesn't Exist",
    },
  },
  USER_ALREADY_EXISTS: {
    statusCode: 409,
    message: {
      error: 'User Already Exists',
      error_description: 'User Already Exists',
    },
  },
  UNAUTHORIZED: {
    statusCode: 401,
    message: {
      error: 'Unauthorized Access',
      error_description: "You don't have access to view this",
    },
  },
  USER_NOT_VERIFIED: {
    code: 401,
    message: {
      error: 'User Not Verified',
      error_description: 'User is not verified',
    },
  },
  PERMISSION_DENIED: {
    statusCode: 401,
    message: {
      error: 'Permission denied',
      error_description: 'You need admin rights to access this',
    },
  },
  TOKEN_GENERATION_FAILED: {
    statusCode: 500,
    message: {
      error: 'Token generation failed',
      error_description: 'Token generation failed',
    },
  },
  INVALID_TOKEN: {
    statusCode: 401,
    message: {
      error: 'Invalid token',
      error_description: 'Invalid token',
    },
  },
};
