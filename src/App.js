import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sambutan from "./components/Sambutan";
import Home from "./components/Home";
import Login from "./components/Login"
import PrivateRoute from "./privat-router/PrivatRoute";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
       
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/sambutan"
            element={
              <PrivateRoute>
                <Sambutan />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <Login />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PrivateRoute>
                <Register />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
