# 🍰 MyDesertsAPI

A simple Node.js + Express + MongoDB REST API that manages delicious desserts!  
Built for learning and demonstration purposes.

---

## 🚀 Features

- Node.js + Express backend
- MongoDB with Mongoose ODM
- Environment variables via `.env`
- Organized folder structure (`models/`)
- RESTful CRUD endpoints
- Ready to expand with frontend integration

---

## 📁 Project Structure

```
server/
│
├── models/
│   └── deserts.js       # Mongoose schema/model
│
├── index.js             # Main Express app
├── .env                 # Environment variables
├── package.json
└── .gitignore
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone this repository

```bash
git clone https://github.com/YashDev-Design/MyDesertsAPI.git
cd MyDesertsAPI/server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file in `/server` and add:

```bash
PORT=10000
MONGO_URI=your_mongodb_connection_string
```

### 4️⃣ Start the server

```bash
npm run dev
```

You should see:

```
✅ Server running on http://localhost:10000
✅ MongoDB connected successfully
```

---

## 🧠 API Endpoints

| Method | Endpoint           | Description             |
| ------ | ------------------ | ----------------------- |
| GET    | `/`                | Check if API is running |
| GET    | `/api/deserts`     | Get all desserts        |
| POST   | `/api/deserts`     | Add a new dessert       |
| DELETE | `/api/deserts/:id` | Delete a dessert by ID  |

---

## 🧪 Example POST Body

```json
{
  "name": "Donut",
  "type": "Sweet",
  "calories": 200
}
```

---

## 💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**
- **nodemon** (for development)

---

## 🧑‍💻 Author

**Yash Dev (YashDev-Design)**  
🎓 Auburn University at Montgomery  
💼 Student Affairs · Social Media & Marketing Assistant

---

## ⭐ Show Your Support

If you like this project, please ⭐ the repo and share it!
