export const config = {
  "dev": {
    "username": process.env.CD_DB_USERNAME,
    "password": process.env.CD_DB_PASSWORD,
    "database": process.env.CD_DB_DATABASE,
    "host": process.env.CD_DB_HOST,
    "dialect": 'postgres',
    "aws_region": process.env.CD_AWS_REGION,
    "aws_profile": process.env.CD_AWS_PROFILE,
    "aws_media_bucket": process.env.CD_AWS_BUCKET,
    "jwt_secret": process.env.CD_JWT_SECRET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  }
}
