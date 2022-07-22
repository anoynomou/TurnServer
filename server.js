
var express = require("express")
var app = express()
var PORT = process.env.PORT || 8888
var http = require("http").createServer(app).listen(PORT)

var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',

  credentials: {
    username: "password",
    
    
  }
  
});

server.addUser("admin","password")



server.start();


app.get("/",(req,res)=>{
  res.send(`
  <h1>Public Turn server</h1>
  <h3>name : admin</h3>
  <h3> Password : password</h3>
  <h3>Turn Server PORT : ${server.listeningPort} </h3>
  <h3>App PORT : ${PORT} </h3>
  `)
})




