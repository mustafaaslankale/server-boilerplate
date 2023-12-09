const enum API_ROUTES {
  AUTH = '/auth',
  BLOG = '/blog',
  USER = '/user',
  RECIPE = '/recipe',
  CLIENT = '/client',
  PATIENT = '/patient',
  TASK = '/task',
  APPOINTMENT = '/appointment',
  PRESCRIPTION = '/prescription',
  WEIGHING = '/weighing',
}

const enum API_VERSION {
  V1 = '/v1',
}

const enum HTTP_STATUS_CODE {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  INTERNAL_SERVER_ERROR = 500,
}

export { API_ROUTES, API_VERSION, HTTP_STATUS_CODE };
