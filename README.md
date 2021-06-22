# blog

## Technologies

This project was developed using Django to Backend and React JS to Frontend.

To serve the API, it's using the [Django Rest Framework (DRF)](https://www.django-rest-framework.org/)

To manage frontend global state, it's using the [React Redux Saga](https://redux-saga.js.org/) and to do Async request using [axios](https://github.com/axios/axios).

## Requirements:
- python 3.8 or greater
- docker and docker-compose
- venv or virtualenvwrapper
- node js
- yarn

## Instalation:
### backend:
- package dependencies:
You need install some dependencies of python packages before installing the requirements of project.
In root folder, has a file named `debian.sh` that's contains all dependencies that you need to install.
You can run each command manually or install all once time:

```bash
    chmod +x debian.sh
    ./debian.sh
```

- create a virtual environment and active it. You can use [Virtualenv Wrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) or [Venv](https://docs.python.org/pt-br/3/library/venv.html)
- install project backend dependencies (With virtualenv active): `pip install -r requirements/dev.txt`
- start docker-compose for postgres: `docker-compose up -d`
- apply migrations of database: `python manage.py migrate`

### frontend:
- access front folder: `cd front`
- Install frontend dependencies: `yarn install --also=dev`


## Running the project
- Check if docker of postgres is running (`docker ps`), otherwise, start it: `docker-compose up -d`
- Start django backend server: `python manage.py runserver`
- Start react frontend server: `cd front && yarn start`

Done!! The application is running at 8000 port. To access it, open in your browser: http://localhost:8000