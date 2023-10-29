const express = require('express');
const path = require('path'); 
const cors = require('cors');
const HTTP_PORT = process.env.PORT || 3000; 
const app = express();

app.use(express.static(path.join(__dirname + "/public")));

const corsOptions = {
    
}

app.use(cors(corsOptions)); 

app.listen(HTTP_PORT, () =>{
    console.log(`Server is listening on PORT: ${HTTP_PORT}`); 
});