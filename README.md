# blog

## Requirements:
- docker and docker-compose
- virtualenv or virtualenvwrapper
- node js
- yarn

## Instalation:
### backend:
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