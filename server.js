var PORT = process.env.PORT || 8080;
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static('templates'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/templates/login.html"));
})

// serving the index.html file 

const server = app.listen(PORT);
const portNumber = server.address().port;
console.log(`port: ${portNumber}`);
// can see the port number in terminal - you can dictate the port number