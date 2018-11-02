const path=require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');


const publicPath = path.join(__dirname,"../public");
const port = process.env.PORT || 3009;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection',(socket) => {
    console.log('New user connected');
    
    socket.emit('newMessage',{
        from:'Tencent',
        text:'hi.congratulations!',
        careateAt:2019
    });
    
    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    });

    socket.on('disconnect',()=>{
        console.log('disconnected from client');
    });

});


app.use(express.static(publicPath));

server.listen(3009,()=>{
    console.log(`Server is listen on ${port}`);
})