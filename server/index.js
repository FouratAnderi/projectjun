const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/userroute');
const trackRoutes = require('./routes/trackroute');
const likeRoutes = require('./routes/likesroute');
const connection = require('./database/sequelize')
const PORT = 8080;
const app = express();


app.use(express.json());
app.use(cors());



app.use('/users', userRoutes);
app.use('/tracks', trackRoutes);
app.use('/likes', likeRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello from the server!");
// });

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});



// const bodyParser = require('body-parser');



// const app = express();
// app.use(bodyParser.json());

// app.listen(8080, () => {
//   console.log("Server listening at http://localhost:8080");
// });

// Use the routes

