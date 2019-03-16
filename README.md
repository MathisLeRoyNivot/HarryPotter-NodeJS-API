# Node.JS Project

Hello ! Here's our Node.JS API developped by Mattéo Lecuit (@MatteoLecuit), Henry Maisonneuve (@Kwoak) & Mathis Le Roy-Nivot (@MathisLeRoyNivot).

## 1 - Initialization

To initialize the project you have to **clone** or **download** the ZIP folder of the project. Make sure you have already download Node.JS. If this is not the case, download [Node.JS](https://nodejs.org/en/) and follow the instructions.

> To install all the depedencies, make sure you npm version is greatter than :
> - express :  [![Node version](https://img.shields.io/node/v/express.svg?style=flat)](http://nodejs.org/download/)
> - mongoose : [![Node version](https://img.shields.io/node/v/mongoose.svg?style=flat)](http://nodejs.org/download/)
> - yargs : [![Node version](https://img.shields.io/node/v/yargs.svg?style=flat)](http://nodejs.org/download/)
> - path : [![Node version](https://img.shields.io/node/v/path.svg?style=flat)](http://nodejs.org/download/)
> - body-parser : [![Node version](https://img.shields.io/node/v/body-parser.svg?style=flat)](http://nodejs.org/download/)
>
> To verify your npm version (Node Packages Manager) type this command :
> ```bash
> $ npm --version
> ````
> Or type this command : 
> ```bash
> $ npm --v
> ````


 - Then, you have to type this command to install all the depedencies of the project saved in package.json & package-lock.json files : 
```bash
 $ npm install
 ```

## 2 - Setup the mongodb connection <img src="http://35.157.45.127/wp-content/uploads/2018/03/mongo-db-design.png" height="50" vertical-align="middle" title="Mongo Logo">
In order to setup a mongodb connection, you need to create a file privateurl.js, inside the folder db.
In this file, you need to paste the following :
```Javascript
let privateurl = 'url';

module.exports = {
    privateurl
};
```
You need to replace **url** with your connection url provided by your host. It should look like the following :

```Javascript
mongodb+srv://user:<password>@cluster-gnebq.mongodb.net/collection?retryWrites=true
```

## 3 - How to start the Node Server locally <img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" height="40" title="Node Server Logo">

- To start the Node Server locally on your computer you have to type the following command on your terminal :
```bash
$ node <your_file_name.js>
```
- In our case, type this command :
```bash
$ node app.js
```
- By typing the previous command, you will obtain this result :
```
Server is running on port : 3000
You can access to the server at the following address : http://localhost:3000
```

### 3.1 -  Give one argument : *< port >*
- You can also give an argument when you are launching the server, to specify the port of your choice in case the default port (3000) was already taken :
```bash
$ node <your_file_name.js> --port=<port>
```
For example, we want to launch the server on port 4000 :
```bash
$ node app.js --port=4000
Server is running on port : 4000
You can access to the server at the following address : http://localhost:4000
```
### 3.2 - Give a second argument : *< function >*
-  A second argument is possible to specify when you're launching the server. It specify the function you want to execute. The functions available are : GET, POST, DELETE & PUT. And you can enter one like the following command :
```bash
$ node <your_file_name.js> --port=<port> --fct=<function>
```
For example, we want to launch the server on port 4000 and execute the GET function :
```bash
$ node app.js --port=4000 --fct=get
Server is running on port : 4000
You can access to the server at the following address : http://localhost:4000/
```
### 3.3 - Give a third argument : *< table >*
-  Finally, to complete the launching of the server with the arguments, you can give a third argument that specify  the table that matches one table of the database and allow attribute. It works like the following command :
```bash
$ node <your_file_name.js> --port=<port> --fct=<function> --table=<table>
```
For example, we want to launch the server on **port** *4000* and execute the *GET* **function** on the **table** named *characters* :
```bash
$ node app.js --port=4000 --fct=get --table=characters
Server is running on port : 4000
You can access to the server at the following address : http://localhost:4000/api/characters
```

### Summary of all arguments
> The following table shows all the arguments that you can give when you're lauching the server locally :
> 
| Argument no.| Command|Options|Example|
| ------ | ------ |------ |------ |
| 1rst| --port |*any port < 65535*| --port=8000 |
| 2nd| --fct |**get** \| **post** \| **delete** \| **put**| --fct=get|
| 3rd| --table |**characters** \| ***houses*** \| ***movies***| --table=houses|
