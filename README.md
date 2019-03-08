# axios-postgres
Application that pulls list of cataloged studies from The NHGRI-EBI Catalog of published genome-wide association studies, processes and saves to remote postgresql database

# initial setup
clone the repository:
git clone https://github.com/CatLibWilk/axios-postgres.git

run installation:
cd axios-postgres
npm install


# database setup
This application is built to connect to a postgresql database installed on a cloud-based VM.  If you'd like to set up the application to connect with a local database, simply make the appropriate changes to the config.json file (see below).  If running on a remote server:
* as postgres user, run createdb fetch
* run command psql
* change postgres user password with ALTER USER postgres WITH PASSWORD '[your_password]'
* make sure that postgres is listening by making appropriate changes to 'pg_hba.conf' and postgresql.conf files at /etc/postgresql/[version]/main/

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
