# Node.JS Project

Hello ! Here's our Node.JS API developped by Mattéo Lecuit (@MatteoLecuit), Henry Maisonneuve (@Kwoak) & Mathis Le Roy-Nivot (@MathisLeRoyNivot).

## Initialization

To initialize the project you have to **clone** or **download** the ZIP folder of the project. Make sure you have already download Node.JS. If this is not the case, download [Node.JS](https://nodejs.org/en/) and follow the instructions. 

 - Then, you have to type this command to install all the depedencies of the project saved in package.json & package-lock.json files : 
```bash
 $ npm install
 ```

## How to start the Node Server locally 

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
 - You can also give an argument when you are launching the server, to specify the port of your choice in case the default port (3000) was already taken :
 ```bash
 $ node <your_file_name.js> <port>
```
 For example, we want to launch the server on port 4000 :
```bash
 $ node app.js 4000
 Server is running on port : 4000
 You can access to the server at the following address : http://localhost:4000
 ```
