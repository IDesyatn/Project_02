export const mySQLConfig = {
  database: process.env.MY_SQL_NAME || 'project_2',
  password: process.env.MY_SQL_PASSWORD || '',
  host: process.env.MY_SQL_HOST || 'localhost',
  user: process.env.MY_SQL_USER || 'test',
};
