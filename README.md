# React Todo App with Context API & Local Storage

A clean and responsive Todo List application built with React and Tailwind CSS. This project demonstrates modern React principles including Hooks (`useState`, `useEffect`, `useContext`), component-based architecture, and centralized state management with the Context API. All todos are saved to the browser's Local Storage, so your tasks persist even after a page refresh.

![alt text](https://github.com/adityathakar-25/todo-list/blob/main/to-do-img.png)

## ✨ Features

-   **Create, Read, Update, Delete (CRUD):** Full functionality to add, view, edit, and delete tasks.
-   **Toggle Completion:** Mark tasks as complete or incomplete with a single click.
-   **Persistent Storage:** Your todo list is automatically saved to the browser's `localStorage` and reloaded when you open the app again.
-   **Responsive Design:** A mobile-first design that looks great on all screen sizes, from mobile phones to desktops.
-   **Intuitive UI:** A simple and clean user interface built with Tailwind CSS for a great user experience.
-   **Efficient State Management:** Uses React's Context API to manage application state without prop-drilling.

## 🛠️ Technologies Used

-   **Frontend:** [React](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **State Management:** React Context API
-   **Persistence:** Browser Local Storage API

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed on your computer.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd YOUR_REPOSITORY_NAME
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).

## 📂 Project Structure

The project follows a standard React application structure:

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── TodoForm.jsx
│   │   └── TodoItem.jsx
│   ├── context/          # React context for state management
│   │   ├── TodoContext.js
│   │   └── index.js      # For easy context imports
│   ├── App.jsx           # Main application component
│   └── main.jsx          # Entry point of the application
├── .gitignore            # Files to be ignored by Git
├── index.html            # HTML root file
├── package.json          # Project dependencies and scripts
└── README.md             # You are here!
```
