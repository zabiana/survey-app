request("dotenv").config(); // read the contents of the .env file
const express = require("express"); // load the node.js webserver
const app = express();

const cors = require("cors"); // load the cross-origin resource sharking management tool
app.use(cors())

app.use(express.json()); // configure the webserver to convert all incoming and outgoing data to json form
app.use("/api", require("./routes/poll")); // load our routes file for api calls

// for production we must serve the HTML page that
if (process.env.NODE_ENV==='PROD'){
    let path = require('path');
    app.use(express.static(__dirname + '/public'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve('public/index.html'))
    });
}

// all else go to 'page not found'
app.all("*", (req, res) => {
    res.sendStatus(404);
});