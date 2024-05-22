# Description

This is an example repository containing different types of applications used for the CSS475 final project. 

## NestJS
[This folder](https://github.com/noslo-solutions/css475-final-project-example/tree/master/nestjs) contains the example code base for a NestJS API that follows the example requirements for a meeting system from deliverable #3

### Running locally
To run this locally you can utilize Docker Compose by opening your terminal and running the following:
```bash
docker-compose up
```
This will start the NestJS server and create all the tables for you. To add seed data you can import the example data from `seeds/db02.sql`


## Django Python

[This folder](https://github.com/noslo-solutions/css475-final-project-example/tree/master/django_example) contains a basic example of a [Django]([url](https://www.djangoproject.com/)) application that has CRUD for just a Room entity. You can create, update, list, get a signle room, and delete the room from a postgres DB

### Running locally 
To run this locally you can utilize Docker Compose by opening your terminal and running the following:
```bash
npm i
docker-compose up
```

### Helpful information
- [Loom video](https://www.loom.com/share/1e838d1d3f954883ab0e383c649e74b2) going over application
- [Django gettings started](https://www.djangoproject.com/start/)

## Java Spring Boot

[This folder](https://github.com/noslo-solutions/css475-final-project-example/tree/master/java-spring-boot) contains a basic example of a Java Spring Boot application that has CRUD for just a Room entity. You can create, update, list, get a signle room, and delete the room from a postgres DB. 

### Running locally 
To run this locally you can utilize Docker Compose by opening your terminal and running the following:
```bash
# first you will need to run the migrations, this will create the room table locally
docker-compose run web python manage.py migrate

# then build the local images and start the containers
docker-compose up --build
```

### Helpful information
- [Loom video](https://www.loom.com/share/b951665160e34b5cb67ebd7b5013a018) going over application
- [Spring Initializr](https://start.spring.io/) to create package for the first application
- [Spring Restful Webservice](https://spring.io/guides/gs/rest-service)
  
