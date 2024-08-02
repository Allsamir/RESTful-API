# Node.js REST API with MongoDB for Geospatial Queries

This Node.js application provides a REST API that accepts latitude and longitude as input parameters and returns a sorted list of users within a 10-kilometer radius. It includes pagination and error handling for invalid or missing parameters.

## Features

- Store user data with latitude and longitude in MongoDB.
- Query users within a 10-kilometer radius of provided coordinates.
- Calculate distances using the Haversine formula.
- Sort users by distance in ascending order.
- Support pagination to limit results.
- Error handling for missing or invalid input parameters.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (Atlas or local instance)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Allsamir/Blogging.git
cd Blogging
```
### Install Dependencies

``` bash
npm install
```

### Run the Application

``` bash
npm start
```
