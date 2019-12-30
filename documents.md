https://medium.com/crowdbotics/how-to-build-a-rest-api-with-nodejs-and-postgresql-828c7ec1e8b1

my version of the project is on github https://github.com/psjoshi20/ps-node-seq-restapi

~/mynode/ps-node-seq-restapi
setup the [project]
mkdir <projectname> ,cd <project name>, npm init --y, npm install express
or 
npm install -g express-generator , express <project name> .........

install packages 
express -> express - this internally takes care for some other packages
pg, pg-hstore -> nodejs postgres
sequelize, sequlelize-cli -> seq
bcrypt, dotenv,cors,

.env - env varibales (postgres connection)

setup postgres database
create database
sequelize init to create req folders for migrations ,seeders,models ,configurations
npx sequelize-cli create:model // refer seq manuals for more
npx sequelize-cli db:migrate
npx sequelize-cli db:seed 

make relevent changes, setup references for models etc






To make a connection between the ExpressJS server and PostgreSQL - use ORM -sequelize  moduel

 in our case, the current working directory is going to be the root of our project.

 Todo and TodoItem are going to have one-to-many-relationship. This is  done by associating 
 both the models and define a custom class method. Let us modify both the model files to 
 add this and some modification in each attribute for things to work our way. Open todo.js file.

Running the Migrations
Migrations provide a clearer picture of what our database models going to look like inside. Since you are making changes in the generated attributes and adding fields like in our case, defaultValue, you have to edit the migration files for each specific model wherever necessary.
Running migrations take care of creating the database table and associated column inside the table for us. This is the functionality of each up function in both migrations files. There is also a down function that is only to run when you need to undo the changes inside the database table for some 
