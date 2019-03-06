# axios-postgres
Application that pulls list of cataloged studies from The NHGRI-EBI Catalog of published genome-wide association studies, processes and saves to remote postgresql database

# Database Setup
To facilitate database connection, a config folder with config.json file must be created (They have been removed from the repo to hide password/host info).

In this file include:
<pre><code>
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
</pre></code>
