export const applicationConfig = {
  host: process.env.HOST || 'localhost',
  port: Number.parseInt(process.env.PORT || '3000', 10),
};