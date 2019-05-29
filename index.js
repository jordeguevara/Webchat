var express = require("express");
var socket = require("socket.io");

var app = express();
var server = app.listen(4000, function() {
  console.log("listening for requests on port 4000,");
});

var io = socket(server);
io.on("connection", function(socket) {
  console.log("connected to ", socket.id);

  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });
});
app.use(express.static("public"));
