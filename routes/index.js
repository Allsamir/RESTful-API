const express = require("express");
const router = express.Router();
const userRoutes = require("./user-routes");

// Routes
router.use("/api/users", userRoutes);

module.exports = router;
