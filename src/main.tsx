import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Router/AppRouter.tsx";
import UseProvaider from "./Provaiders/UseProvaider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <UseProvaider>
      <App />
    </UseProvaider>
    </BrowserRouter>
  </StrictMode>
);
