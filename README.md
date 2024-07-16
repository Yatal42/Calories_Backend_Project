# Calories Manager RESTful Web Services

## Overview
This project is a part of the Asynchronous Server-Side Course. 
The objective is to develop specific parts of RESTful Web Services that allow the development of a client application for managing daily calorie consumption.
The server-side application is built using Node.js, Express.js, and MongoDB (using MongoDB Atlas service).

## Team Members
- Tal Yaakobi @Yatal42
- Gil Levkovitch @GilLev94

## Installation and Setup

### Instructions for Use
1. **Clone the repository** to your local machine.
2. **Install dependencies** using `npm install`.
3. **Configure MongoDB Atlas** and update the connection string in `.env` file.
4. **Add initial user** using the provided scripts.
5. **Start the server** using `npm start`.
6. **Run tests** using the test script to verify the functionality.
   
### Prerequisites
- Node.js (version 14 or above)
- npm (Node package manager)
- MongoDB Atlas account

### Steps to Setup

1. **Clone the repository**:
   - git clone repository-url
   - cd Calories_Backend_Project
2. **Install dependencies**:
   - npm install
3. **Configure MongoDB Atlas**:
   - Create a MongoDB Atlas cluster and create a database named calories_DB.
   - Create a .env file in the root directory and add your MongoDB Atlas connection string:
      'DB_URL=mongodb+srv://username:password@cluster0.mongodb.net/calories_DB'

4. **Add an initial user**:
    - node scripts/addInitialUser.js
5.	**Run the server**:
    - npm start
6. **Run the test script (optional)**:
    - node scripts/test.js

## API Endpoints

### Add Calorie Entry
	•	Endpoint: /addcalories/
	•	Method: POST
	•	Description: Adds a new calorie consumption item.
	•	Parameters: user_id, year, month, day, description, category, amount

### Get User Details
	•	Endpoint: /users/:id
	•	Method: GET
	•	Description: Retrieves detailed information about a specific user.
	•	Parameters: id (user ID)

### Get Calorie Report
	•	Endpoint: /report/
	•	Method: GET
	•	Description: Retrieves a detailed report of calorie consumption for a specific user, year, and month.
	•	Parameters: user_id, year, month

### Get Developers Information 
	•	Endpoint: /about/
	•	Method: GET
	•	Description: Retrieves information about the developers.
  	

