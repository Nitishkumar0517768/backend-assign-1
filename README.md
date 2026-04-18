# Notes App API

A clean REST API for managing notes built with Node.js, Express, and MongoDB.

## Features
- CRUD operations for notes
- Bulk create and delete support
- Complete resource replacement (PUT) vs Partial updates (PATCH)
- MVC Architecture
- Mongoose Schema validation
- Clean response format

## Folder Structure
```text
src/
├── config/
│   └── db.js              (Mongoose connection)
├── models/
│   └── note.model.js      (Schema & Model)
├── controllers/
│   └── note.controller.js (Logic & DB Queries)
├── routes/
│   └── note.routes.js     (Route Definitions)
├── middlewares/           (Middleware folder)
├── app.js                 (Express Setup)
└── index.js               (Server Entry Point)
```

## Setup
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add:
   ```env
   MONGO_URI=your_mongodb_uri
   PORT=5000
   ```
4. Run `npm run dev` to start the server in development mode.

## API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | /api/notes | Create a single note |
| POST | /api/notes/bulk | Create multiple notes |
| GET | /api/notes | Get all notes |
| GET | /api/notes/:id | Get a single note by ID |
| PUT | /api/notes/:id | Replace a note completely |
| PATCH | /api/notes/:id | Update specific fields only |
| DELETE | /api/notes/:id | Delete a single note |
| DELETE | /api/notes/bulk | Delete multiple notes |