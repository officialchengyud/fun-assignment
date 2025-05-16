import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import "./index.css";
import App from "./components";
import { StoreProvider } from "./hooks/useStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 10000 } },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <ToastProvider />
        <StoreProvider>
          <App />
        </StoreProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  </StrictMode>
);
