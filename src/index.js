import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./contexts/QuizContext";
import { ThemeProvider } from "./contexts/ThemeContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <QuizProvider>
      <App />
    </QuizProvider>
  </ThemeProvider>
  </React.StrictMode>
);

