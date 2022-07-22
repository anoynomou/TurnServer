
var express = require("express")
var app = express()
var PORT = 8888 || process.env.PORT
var http = require("http").createServer(app).listen(PORT)

var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  listeningPort:PORT,
  credentials: {
    username: "password",
    
    
  }
  
});

server.addUser("admin","password")



app.get("/",(req,res)=>{
  res.send(`
  <h1>Public Turn server</h1>
  <h3>name : admin</h3>
  <h3> Password : password</h3>
  <h3>PORT : ${PORT} </h3>
  `)
})



server.start();
