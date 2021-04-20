const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/html-routes')(app);
require('./routes/api-routes')(app);

console.log(uuidv4());

app.listen(PORT, ()=>{
    console.log(`App is listening on PORT: ${PORT}`);
})