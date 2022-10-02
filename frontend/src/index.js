import React from 'react'
import App from './App'
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </Router>
  </StrictMode>
);