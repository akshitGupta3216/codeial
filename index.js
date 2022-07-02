const express = require('express');
const app = express();
const port = 8001;

app.listen(port,function(err){
    if(err){
        console.log(`error ok  in running the server ${err}`);
    }
    console.log(`server is running on port ${port}`);
});