var socket = io();
socket.on("connect",()=>{
    console.log('connected to Server');

    socket.emit('createMessage',{
        to:'penny@gmail.com',
        text:'hello'
    })
});

socket.on('newMessage',(message)=>{
    console.log('newMessage',message);
});


socket.on('disconnect',()=>{
    console.log('disconnected from server');
});
