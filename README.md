### A simple rest api

A simple restful api, using nodejs and json patterns, can be used like project base.

### Dependencies

* NodeJS
* MongoDB
* Node modules in package.json

### Installing and start with api

Clone project to some path, and get into the path, then run:

  ```
  $ npm i
  $ node src/index.js
  ```
Requistions in JSON
  ```
  POST http://localhost:3000/info/create_info //create a new object in db
  GET http://localhost:3000/info //get all objects in database schema
  GET http://localhost:3000/info/infoId //get only selected id from database schema
  PUT http://localhost:3000/info/infoId //update with a new info
  DELETE http://localhost:3000/info/infoId //delete selected id
  ```
