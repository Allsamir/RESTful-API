Node.js REST API with MongoDB for Geospatial Queries
This Node.js application provides a REST API that allows you to search for users within a specified radius based on their geospatial location stored in MongoDB.

Features
Store user data with latitude and longitude in MongoDB.
Query users within a 10-kilometer radius of provided coordinates.
Calculate distances using the Haversine formula (implementation required).
Sort users by distance in ascending order.
Support pagination to limit results.
Error handling for missing or invalid input parameters.
Prerequisites
Node.js (v14 or later)
MongoDB (Atlas or local instance)
Getting Started
Clone the Repository

Bash
git clone https://github.com/your-username/geospatial-api.git
cd geospatial-api
Use code with caution.

Install Dependencies

Bash
npm install
Use code with caution.

Setup Environment Variables

Create a .env file in the root directory with the following content, replacing <your_mongodb_uri> with your actual MongoDB connection string:   

MONGO_URI=<your_mongodb_uri>
Run the Application

Bash
npm start
Use code with caution.

This will start the server and listen for requests on the default port (5000) unless you specify a different port in a .env variable.

API Documentation
The API provides a single endpoint:

GET /api/users
Request Parameters:

lat (required): Latitude of the search center (in decimal degrees).
lng (required): Longitude of the search center (in decimal degrees).
limit (optional): Number of users to return per page (defaults to 10).
page (optional): Page number for pagination (defaults to 1).
Response:

The response is a JSON array containing user objects with the following properties:

_id: User's unique identifier.
name: User's name.
location: User's geospatial location (GeoJSON format).
distance: Distance (in kilometers) from the search center.
Example Usage:

GET http://localhost:5000/api/users?lat=23.7803&lng=90.4173
This request searches for users within a 10-kilometer radius of Dhaka, Bangladesh (latitude: 23.7803, longitude: 90.4173) and returns the first 10 results sorted by distance.

Additional Notes
The implementation utilizes the Haversine formula for distance calculation, which you'll need to integrate into the provided code. Resources for implementing the Haversine formula in JavaScript can be found online.
For large datasets, consider using more efficient distance calculation methods and indexing strategies in MongoDB to optimize performance.
Security measures should be implemented to protect user data, especially in production environments.
Unit and integration tests are recommended to ensure code quality and maintainability.
Contributing
Feel free to contribute to this project by creating pull requests with improvements, bug fixes, or new features.

This readme.md file provides a comprehensive overview of the project, including features, setup instructions, API documentation, and additional considerations. It also encourages contributions for further development.
