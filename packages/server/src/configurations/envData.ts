export const mySqlConfig = {
  name: process.env.MY_SQL_NAME,
  password: process.env.MY_SQL_PASSWORD,
  host: process.env.MY_SQL_HOST,
  user: process.env.MY_SQL_USER,
};

export const mongoDBConfig = {
  name: process.env.MONGO_DB_NAME,
  password: process.env.MONGO_DB_PASSWORD,
};

export const applicationConfig = {
  host: process.env.HOST,
  port: process.env.PORT,
};
