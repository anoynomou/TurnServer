var Turn = require('node-turn');
var server = new Turn({
  // set options
  authMech: 'long-term',
  listeningPort:8888 || process.env.PORT,
  credentials: {
    username: "password",
    
    
  }
  
});

server.addUser("admin","password")


server.addListener("connect",(ev)=>{
  console.log("connect")
})




server.start();
