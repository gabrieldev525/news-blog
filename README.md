# blog

## Requirements:
- python 3.8 or greater
- docker and docker-compose
- virtualenv or virtualenvwrapper
- node js
- yarn

## Instalation:
### backend:
- package dependencies:
You need install some dependencies of python packages before installing the requirements of project.
In root folder, has a file named `debian.sh` that's contains all dependencies that you need to install.
You can run each command manually, of install all once time:

```bash
    chmod +x debian.sh
    ./debian.sh
```

- create a virtual environment and active it
- install project backend dependencies: `pip install -r requirements/dev.txt`
- start docker-compose for postgres: `docker-compose up -d`
- apply migrations of database: `python manage.py migrate`

### frontend:
- access front folder: `cd front`
- Install frontend dependencies: `yarn install --also=dev`


## Running the project
- Check if docker of postgres is running, otherwise, start it: `docker-compose up -d`
- Start django backend server: `python manage.py runserver`
- Start react frontend server: `cd front && yarn start`

Done!! The application is running at 8000 port. To access it, open in your browser: http://localhost:8000