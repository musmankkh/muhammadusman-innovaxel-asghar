
# 🔗 Shortly - URL Shortener

> A full-stack URL shortener web app built as part of the Innovaxel project assessment. It allows users to shorten long URLs, view analytics, update, and delete shortened URLs with ease.

---

## 📁 Project Structure

The repository is organized into two main branches:

- **`main/`** – contains only the `README.md` for documentation and submission purposes.
- **`dev/`** – contains the complete source code for both client and server.

---

### 🔧 Folder Layout (in `dev` branch)

```
dev/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/Navbar.jsx
│   │   │   └── Footer/Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── index.js
│   └── .env (excluded in `.gitignore`)
```

---

## 🚀 Features

- 🌐 Shorten any long URL into a custom short code
- 📊 View detailed stats like creation time, update time, and access count
- ✏️ Update the destination URL of a short code
- 🗑️ Delete any previously generated short URL
- 🎨 Responsive, clean frontend UI using React

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Axios
- Bootstrap 5

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment management

---

## 📦 Installation Instructions

### 1. Clone the repository:

```bash
git clone --branch dev --single-branch https://github.com/musmankkh/muhammadusman-innovaxel-asghar.git
cd muhammadusman-innovaxel-asghar
```

---

### 2. Set up the backend

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory with the following:

```
PORT=8080
MONGO_URI=your_mongodb_connection_string_here
```

Start the backend server:

```bash
node index.js
```

---

### 3. Set up the frontend

```bash
cd ../client
npm install
npm start
```

Frontend will run on `http://localhost:3000/`.

---

## 📸 UI Preview

- Homepage with URL form and output
- Stats view for shortened URLs
- Update and delete short URL functionalities
- About and Contact pages

---

## 📌 Notes

- Make sure MongoDB is running or use MongoDB Atlas.
- `.env` file is excluded from Git for security.
- Project designed with clean separation of frontend and backend concerns.

---

## 👨‍💻 Author

**Muhammad Usman Asghar**  
Submitted for **Innovaxel Project Assessment**

---

## 📄 License

This project is for educational and assessment purposes only.
