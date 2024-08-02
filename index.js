require("dotenv").config(); // to configure .env files
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const apiRoutes = require("./routes/index");

// Middlewares
app.use(apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello From REST API of Node.js application");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
