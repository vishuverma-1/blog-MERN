import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <QueryClientProvider client = {queryClient} >
        <App />
      </QueryClientProvider>
  </BrowserRouter>
);
