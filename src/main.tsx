import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import "./index.css";
import Dashboard from "./Dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HeroUIProvider>
      <Dashboard />
    </HeroUIProvider>
  </StrictMode>
);
