const path=require('path');
const express = require('express');

const publicPath = path.join(__dirname,"../public");
const port = process.env.PORT || 3009;
var app = express();

app.use(express.static(publicPath));
app.listen(3009,()=>{
    console.log(`Server is listen on ${port}`);
})