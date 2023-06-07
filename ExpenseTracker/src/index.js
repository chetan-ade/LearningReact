import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App"; // App is a component

const root = ReactDOM.createRoot(document.getElementById("root")); // Root of our React App
root.render(<App />); // Render something in the root -> this syntax is JSX, not regular JS
