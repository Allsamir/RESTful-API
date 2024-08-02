const express = require("express");
const userRoutes = express.Router();
const client = require("../database/mongoDB");

// Database and collection
const userDB = client.db("userDB");
const users = userDB.collection("users");
users.createIndex({ location: "2dsphere" });
// Requests

async function databaseOperations() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );

    userRoutes.get("/", async (req, res) => {
      try {
        const latitude = parseFloat(req.query.latitude);
        const longitude = parseFloat(req.query.longitude);
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        if (isNaN(latitude) || isNaN(longitude)) {
          return res
            .status(400)
            .json({ error: "Latitude and longitude must be valid numbers." });
        }
        const databaseUsers = await users
          .aggregate([
            {
              $geoNear: {
                near: { type: "Point", coordinates: [longitude, latitude] },
                distanceField: "distance",
                maxDistance: 10000, // 10 kilometers in meters
                spherical: true,
              },
            },
            { $sort: { distance: 1 } },
            { $skip: skip },
            { $limit: limit },
          ])
          .toArray();

        return res.status(200).json({ users: databaseUsers, success: true });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "An error occurred." });
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "An error occurred." });
  }
}
databaseOperations();
module.exports = userRoutes;
