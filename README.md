# 📝 Tech Blog Website

Welcome to **Tech Blog Website** — a modern, responsive blog platform where you can read and share insightful tech articles, stories, and tutorials!

![Tech Blog Preview](./preview-image.png)

---

## 🚀 Features

- **User Authentication**: Sign up, log in, and manage your account securely.
- **Create, Read, Update, Delete (CRUD)** blogs with rich text and image uploads.
- **Responsive Design** with Tailwind CSS for smooth experience on desktop and mobile.
- **Image Uploads** handled efficiently with server-side storage.
- **RESTful API** built with Express.js and MongoDB for backend.
- **Client-side routing** using React Router.
- **Real-time feedback** with form validations and error handling.
- **Easy navigation** with Navbar and Footer components.
- **Clean and modular codebase** for easy customization and extension.

---

## 📁 Project Structure

frontend/ # React client application
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Page views (Home, About, Login, Signup, etc.)
│ └── App.jsx # Main app with routing

backend/ # Express backend API
├── controllers/ # Route logic (blogs, auth)
├── models/ # Mongoose schemas (User, Blog)
├── routes/ # API routes
└── server.js # Entry point and app setup


---

## 💻 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- [Yarn](https://yarnpkg.com/) or npm

### Backend Setup

```bash
cd backend
npm install
# Create .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
npm run dev

Frontend Setup

cd frontend
npm install
npm run dev

Open your browser at http://localhost:3000 (or as shown in the terminal).
🔑 Authentication Flow

    Signup registers a new user with email and password.

    Passwords are hashed securely.

    Login returns a JWT token used for authenticated API requests.

    Protected routes allow users to create, edit, or delete their own blog posts.

🛠 Tech Stack
Layer	Technology
Frontend	React, Tailwind CSS
Backend	Node.js, Express
Database	MongoDB, Mongoose
Authentication	JWT (JSON Web Tokens)
Image Storage	Local filesystem uploads
🤝 Contributing

Contributions are welcome! Please follow these steps:

    Fork the repository

    Create a new branch (git checkout -b feature/my-feature)

    Make your changes

    Commit and push your branch

    Open a pull request

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
🙏 Acknowledgments

    Thanks to all the open-source libraries used!

    Inspired by modern blogging platforms and React best practices.

📬 Contact

Created by [Your Name] - feel free to reach out!

    Email: your.email@example.com

    GitHub: your-github-username

Enjoy blogging! 🚀


---

**You can customize**:

- Add screenshots or GIFs of your blog UI.
- Replace placeholders like "Your Name" and emails.
- Add badges for build status, license, or dependencies if you use CI.

Would you like me to generate a README with badges and more visuals too?
