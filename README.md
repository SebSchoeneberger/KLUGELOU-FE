<div id="top">

<!-- HEADER STYLE: CLASSIC -->
<div align="center">


# Klugelou Gemstone Seller Webpage - Frontend Repo 

<em>This is the **frontend repository** for a Gemstone Seller Webpage, a full-stack MERN application designed to showcase and manage gemstones. The application allows users to browse and filter gemstones while providing admins with tools to manage the inventory dynamically.</em>

<!-- BADGES -->
<img src="https://img.shields.io/github/last-commit/SebSchoeneberger/KLUGELOU-FE?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
<img src="https://img.shields.io/github/languages/top/SebSchoeneberger/KLUGELOU-FE?style=flat&color=0080ff" alt="repo-top-language">
<img src="https://img.shields.io/github/languages/count/SebSchoeneberger/KLUGELOU-FE?style=flat&color=0080ff" alt="repo-language-count">

<em>Built with the tools and technologies:</em>

<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
<img src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white" alt="npm">
<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/DaisyUI-1AD1A5.svg?style=flat&logo=DaisyUI&logoColor=white" alt="DaisyUI">
<br>
<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
<img src="https://img.shields.io/badge/CSS-663399.svg?style=flat&logo=CSS&logoColor=white" alt="CSS">

</div>
<br>

---

## 📄 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
    - [Prerequisites](#-prerequisites)
    - [Installation](#-installation)
    - [Usage](#-usage)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [Links](#-Links)


---

## ✨ Overview

A website created for a gemstone seller to showcase and manage their inventory. This platform allows users to explore gemstones using advanced filters, view detailed properties, and learn more about their healing and spiritual benefits.

- Interactive gemstone library with advanced filtering.  
- Admin panel for creating, updating, and managing gemstones.  
- Intuitive design with reusable React components.

**Why KLUGELOU?**

The core features include:

- 🎨 **Vite Configuration:** Optimizes build processes for faster development and production.
- 🌈 **Tailwind CSS Integration:** Utilizes a utility-first CSS framework for rapid and cohesive styling.
- 🔒 **Authentication Management:** Securely handles user sessions and admin access for enhanced security.
- 🔄 **Dynamic Component Architecture:** Modular components improve reusability and maintainability.
- 🌐 **API Integration:** Facilitates seamless communication with backend services for efficient data management.
- 📱 **Responsive Design:** Ensures a consistent user experience across all devices, enhancing accessibility.

---

## 📌 Features

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>Single Page Application (SPA) using React</li><li>Component-based architecture</li><li>Utilizes React Router for navigation</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>ESLint for linting JavaScript and JSX</li><li>Pre-configured ESLint plugins for React</li><li>TypeScript support via @types packages</li></ul> |
| 📄 | **Documentation** | <ul><li>README.md for project overview</li><li>Inline comments in code for clarity</li><li>Usage examples in documentation</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Axios for HTTP requests</li><li>Quill for rich text editing</li><li>Tailwind CSS for styling</li><li>DaisyUI for UI components</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Reusable components for UI</li><li>Custom hooks for shared logic</li><li>Separation of concerns in file structure</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized bundle size with Vite</li><li>Code splitting for faster load times</li><li>Lazy loading of components</li></ul> |
| 🛡️ | **Security**      | <ul><li>Secure HTTP requests with Axios</li><li>Input sanitization in forms</li><li>Environment variables for sensitive data</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Core dependencies: React, React-DOM</li><li>Development tools: ESLint, Vite</li><li>Styling: Tailwind CSS, DaisyUI</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Component-based design allows for easy scaling</li><li>State management can be enhanced with Redux or Context API</li><li>API integration for backend services</li></ul> |

---

## 📁 Project Structure

```sh
└── KLUGELOU-FE/
    ├── Procfile
    ├── README.md
    ├── dist
    │   ├── assets
    │   ├── index.html
    │   └── vite.svg
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── Components
    │   ├── Layouts
    │   ├── Pages
    │   ├── assets
    │   ├── context
    │   ├── index.css
    │   ├── main.jsx
    │   └── services
    ├── tailwind.config.js
    ├── utils
    │   └── tokenUtils.js
    └── vite.config.js
```

---


## 🚀 Getting Started

### 📋 Prerequisites

This project requires the following dependencies:

- **Programming Language:** JavaScript
- **Package Manager:** Npm

### ⚙️ Installation

Build KLUGELOU-FE from the source and intsall dependencies:

1. **Clone the repository:**

    ```sh
    ❯ git clone https://github.com/SebSchoeneberger/KLUGELOU-FE
    ```

2. **Navigate to the project directory:**

    ```sh
    ❯ cd KLUGELOU-FE
    ```

3. **Install the dependencies:**

**Using [npm](https://www.npmjs.com/):**

```sh
❯ npm install
```

### 💻 Usage

Run the project with:

**Using [npm](https://www.npmjs.com/):**

```sh
npm start
```

---


## 🤝 Contributing

- **💬 [Join the Discussions](https://github.com/SebSchoeneberger/KLUGELOU-FE/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/SebSchoeneberger/KLUGELOU-FE/issues)**: Submit bugs found or log feature requests for the `KLUGELOU-FE` project.



## Links  
- **Live Page:** [edelstein-bibliothek.de](https://edelstein-bibliothek.de/)  
- **Backend Repository:** [KLUGELOU-BE](https://github.com/SebSchoeneberger/KLUGELOU-BE)  
