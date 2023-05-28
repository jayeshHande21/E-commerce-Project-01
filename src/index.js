import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { BootContext, BootProvider } from "./Context/BootContext";
import { AuthContext, AuthProvider } from "./Context/AuthContext";

import App from "./App";
import { makeServer } from "./server";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { BootContext };
export { AuthContext };

makeServer();

root.render(
  <StrictMode>
    <Router>
      <BootProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BootProvider>
    </Router>
  </StrictMode>
);
