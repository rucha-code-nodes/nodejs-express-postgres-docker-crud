# Node.js Express PostgreSQL CRUD API (Dockerized)

A RESTful CRUD API built with **Node.js**, **Express**, and **PostgreSQL**, fully containerized using **Docker**. This project demonstrates backend development, database integration, API design, validation, and error handling.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [Setup Instructions](#setup-instructions)  
- [Docker & PostgreSQL](#docker--postgresql)  
- [API Endpoints](#api-endpoints)  
- [Screenshots](#screenshots)  
- [Author](#author)  

---

## Features

- Create, Read, Update, Delete (CRUD) operations for users  
- Schema validation using **Joi** (`inputValidator.js`)  
- Centralized error handling (`errorHandler.js`)  
- PostgreSQL database integration  
- Dockerized PostgreSQL for easy setup  
- Organized project structure for maintainability  

---

## Tech Stack

- **Node.js**  
- **Express.js**  
- **PostgreSQL**  
- **Docker**  
- **Joi** (validation)  

---

## Project Structure

```

project-folder/
│
├── src/
│   ├── config/
│   │   └── db.js                 # PostgreSQL connection setup
│   ├── controllers/
│   │   └── userController.js     # User route logic
│   ├── models/
│   │   └── userModel.js          # DB model functions
│   ├── routes/
│   │   └── userRoutes.js         # API routes
│   ├── middleware/
│   │   ├── errorHandler.js       # Error handling middleware
│   │   └── inputValidator.js     # Joi validation middleware
│   └── data/
│       ├── createUserTable.js    # Script to create user table
│       └── data.sql              # SQL seed file
│
├── screenshots/                  # Screenshots for README
├── .env                          # Environment variables
├── .gitignore
├── package.json
├── package-lock.json
├── server.js                      # Entry point
├── commandsForDocker.txt
└── gitCommands.txt

````

---

## Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/rucha-code-nodes/nodejs-express-postgres-docker-crud.git
cd nodejs-express-postgres-docker-crud
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the application

```bash
npm run dev
```

The API runs on **[http://localhost:3000](http://localhost:3000)** by default.

---

## Docker & PostgreSQL Setup

### 1️⃣ Pull PostgreSQL Docker image

```bash
docker pull postgres
```

### 2️⃣ Run PostgreSQL container

```bash
docker run --name postgres-db -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres
```

* Replace `yourpassword` with a secure password.

### 3️⃣ Access PostgreSQL container

```bash
docker exec -it postgres-db psql -U postgres
```

* List all databases:

```sql
\l
```

### 4️⃣ Start/Stop PostgreSQL container

```bash
docker start postgres-db
docker stop postgres-db
```

### 5️⃣ (Optional) pgAdmin Setup

* Download **pgAdmin** as a Docker container or desktop app.
* Connect to PostgreSQL container using:

  * Host: `localhost`
  * Port: `5432`
  * User: `postgres`
  * Password: the one you set

---

## API Endpoints

| Method | Endpoint   | Description         |
| ------ | ---------- | ------------------- |
| GET    | /users     | Get all users       |
| POST   | /users     | Create a new user   |
| GET    | /users/:id | Get a user by ID    |
| PUT    | /users/:id | Update a user by ID |
| DELETE | /users/:id | Delete a user by ID |

---

## Screenshots

### API Example in Postman

![Postman GET Users](screenshots/postman-users.png)

### Docker Running PostgreSQL

![Docker PostgreSQL](screenshots/docker-postgres.png)

### pgAdmin Database View

![pgAdmin](screenshots/pgadmin.png)

---

## Author

**Rucha Ahire**
[GitHub](https://github.com/rucha-code-nodes)

```

