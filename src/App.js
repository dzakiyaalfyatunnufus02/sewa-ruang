import "./App.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sambutan from "./components/Sambutan";
import Home from "./components/Home";
import PrivateRoute from "./privat-router/PrivatRoute";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
