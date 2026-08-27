# Todo List API

REST API Todo List menggunakan Node.js, Express.js, dan SQLite.

Project ini dibuat sebagai latihan backend untuk memahami REST API, CRUD, database, validation, error handling, dan automated testing.

---

## 1. Teknologi

- Node.js
- Express.js
- SQLite
- sqlite3
- Supertest
- Node.js Test Runner

---

## 2. Fitur

- Get semua todo
- Get todo berdasarkan ID
- Create todo
- Update todo
- Update status todo
- Delete todo
- Input validation
- Error handling
- SQLite database
- Automated testing

---

## 3. Struktur Project

```text
todo-api/
│
├── src/
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── todoController.js
│   │
│   ├── models/
│   │   └── todoModel.js
│   │
│   ├── routes/
│   │   └── todoRoutes.js
│   │
│   ├── services/
│   │   └── todoService.js
│   │
│   └── middleware/
│       └── errorHandler.js
│
├── tests/
│   └── todo.test.js
│
├── database/
│   └── todo.db
│
├── package.json
├── .gitignore
└── README.md
```

---

## 4. Instalasi

Clone project:

```bash
git clone <repository-url>
```

Masuk ke folder:

```bash
cd todo-api
```

Install dependency:

```bash
npm install
```

---

## 5. Menjalankan Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Server berjalan di:

```text
http://localhost:3000
```

---

## 6. API Endpoint

### GET Semua Todo

```http
GET /api/todos
```

Response:

```json
{
  "success": true,
  "data": []
}
```

---

### GET Todo Berdasarkan ID

```http
GET /api/todos/:id
```

Contoh:

```http
GET /api/todos/1
```

---

### POST Todo

```http
POST /api/todos
```

Body:

```json
{
  "title": "Belajar Node.js",
  "description": "Belajar Express"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Belajar Node.js",
    "description": "Belajar Express",
    "completed": false
  }
}
```

---

### PUT Todo

```http
PUT /api/todos/:id
```

Body:

```json
{
  "title": "Belajar Express.js",
  "description": "Belajar REST API"
}
```

---

### PATCH Status

```http
PATCH /api/todos/:id/status
```

Body:

```json
{
  "completed": true
}
```

---

### DELETE Todo

```http
DELETE /api/todos/:id
```

Contoh:

```http
DELETE /api/todos/1
```

---

## 7. Validation

### Title wajib diisi

Tidak valid:

```json
{
  "title": ""
}
```

### Title minimal 3 karakter

Tidak valid:

```json
{
  "title": "Hi"
}
```

Valid:

```json
{
  "title": "Belajar"
}
```

### completed harus boolean

Valid:

```json
{
  "completed": true
}
```

Tidak valid:

```json
{
  "completed": "true"
}
```

---

## 8. HTTP Status

| Status | Arti                  |
| ------ | --------------------- |
| 200    | Success               |
| 201    | Created               |
| 400    | Bad Request           |
| 404    | Not Found             |
| 500    | Internal Server Error |

---

## 9. Testing

Jalankan:

```bash
npm test
```

Testing mencakup:

- GET todos
- GET todo by ID
- GET invalid ID
- GET todo yang tidak ditemukan
- POST todo
- POST tanpa title
- POST title terlalu pendek
- PUT todo
- PUT ID tidak ditemukan
- PATCH status true
- PATCH status false
- PATCH invalid boolean
- DELETE todo
- DELETE ID tidak ditemukan

---

## 10. Arsitektur

Alur request:

```text
Client
  │
  ▼
Express
  │
  ▼
Routes
  │
  ▼
Controller
  │
  ▼
Service
  │
  ▼
Model
  │
  ▼
SQLite
```

### Routes

Menentukan endpoint API.

### Controller

Menangani HTTP request dan response.

### Service

Menangani business logic dan validation.

### Model

Berkomunikasi dengan database.

### Database

Menyimpan data todo.

---

## 11. Contoh Flow Create Todo

Request:

```http
POST /api/todos
```

Body:

```json
{
  "title": "Belajar SQLite",
  "description": "Membuat database Todo"
}
```

Flow:

```text
POST /api/todos
       ↓
todoRoutes.js
       ↓
createTodo()
       ↓
todoService.addTodo()
       ↓
validateTitle()
       ↓
todoModel.createTodo()
       ↓
SQLite
       ↓
Response JSON
```

---

## 12. Contoh Flow Delete

```text
DELETE /api/todos/1
       ↓
Route
       ↓
Controller
       ↓
Service
       ↓
Cek Todo
       ↓
Model
       ↓
SQLite DELETE
       ↓
Response
```

---

## 13. Development Commands

Install dependency:

```bash
npm install
```

Run development:

```bash
npm run dev
```

Run production:

```bash
npm start
```

Run test:

```bash
npm test
```

---

## 14. Future Development

Project dapat dikembangkan menjadi:

- User authentication
- Register
- Login
- JWT
- Todo berdasarkan user
- Priority
- Category
- Due date
- Search
- Filter
- Pagination
- Sorting
- React frontend
- Docker
- CI/CD
- Deployment

---

## 15. Learning Goal

Setelah menyelesaikan project ini, diharapkan memahami:

```text
JavaScript
   ↓
Node.js
   ↓
Express.js
   ↓
Routing
   ↓
Request / Response
   ↓
REST API
   ↓
CRUD
   ↓
SQLite
   ↓
MVC / Layered Architecture
   ↓
Validation
   ↓
Error Handling
   ↓
Testing
```
