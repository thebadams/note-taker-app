const express = require("express");


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./routes/html-routes')(app);
// require('./routes/api-routes')(app);

app.listen(PORT, ()=>{
    console.log(`App is listening on PORT: ${PORT}`);
})