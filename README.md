# Fetch-postgres
Application that pulls data, processes and saves to remote postgresql database

# Database Setup
To facilitate database connection, a config folder with config.json file must be created (They have been removed from the repo to hide password/host info).

In this file include:
{
  "development": {
    "username": "postgres",
    "password": YOUR_PASSWORD,
    "database": "fetch",
    "host": YOUR_HOST,
    "port": 5432,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": YOUR_PASSWORD,
    "database": "fetch",
    "host": YOUR_HOST,
    "port": 5432,
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": YOUR_PASSWORD,
    "database": "fetch",
    "host": YOUR_HOST,
    "port": 5432,
    "dialect": "postgres"
  }
}
