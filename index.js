//Import Express
let express = require('express')
//Start App
let app = express();

//Import routes
let apiRoutes = require("./routes")
// Welcome message


//body parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

connectDB();

//Assign port
var port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send('Welcome to Express'));

//Use API routes in the App
app.use('/api', apiRoutes)

// Launch app to the specified port
app.listen(port, function () {
    console.log("Running FirstRest on Port " + port);
})





