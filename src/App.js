import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sambutan from "./components/Sambutan";
import Home from "./components/Home";
import Login from "./components/Login";
import PrivateRoute from "./privat-router/PrivatRoute";
import Register from "./components/Register";
import Tabel from "./components/Tabel";
import Costumer from "./components/Costumer";
import Order from "./components/Order";
import ReportSewa from "./components/ReportSewa";
import AddCostumer from "./components/AddCostumer";
import AddTabel from "./components/AddTabel";
import AddReportSewa from "./components/AddReportSewa";
import AddOrder from "./components/AddOrder";

function App() {
  return (
    <>
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
            path="/"
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
          <Route
            path="/tabel"
            element={
              <PrivateRoute>
                <Tabel />
              </PrivateRoute>
            }
          />
          <Route
            path="/costumer"
            element={
              <PrivateRoute>
                <Costumer />
              </PrivateRoute>
            }
          />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path="/reportsewa"
            element={
              <PrivateRoute>
                <ReportSewa />
              </PrivateRoute>
            }
          />
         
          <Route
            path="/addCostumer"
            element={
              <PrivateRoute>
                <AddCostumer />
              </PrivateRoute>
            }
          />
          <Route
            path="/addtabel"
            element={
              <PrivateRoute>
                <AddTabel />
              </PrivateRoute>
            }
          />
          <Route
            path="/addreportsewa"
            element={
              <PrivateRoute>
                <AddReportSewa />
              </PrivateRoute>
            }
          />
          <Route
            path="/addorder"
            element={
              <PrivateRoute>
                <AddOrder
                 />
              </PrivateRoute>
            }
          />
          </Routes>
      </Router>
    </>
  );
}

export default App;
