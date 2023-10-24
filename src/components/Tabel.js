import React, { useState } from "react";
import "../components/Tabel.css";
import ruang from "../assets/ruang-keluarga-nyaman-cover.jpg";
import {
  Button,
  Nav,
  NavDropdown,
  NavLink,
  Navbar,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Tabel = () => {
  const [search, setSearch] = useState("");
  const [accounts, setAccounts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);




  const getAccounts = async () => {
    try {
      const respon = await axios.get("http://localhost:2222/accounts");
      const allAccounts = respon.data;

      // Apply search filter only for supervisor role
      const filteredAccounts = allAccounts.filter(
        (employee) =>
          employee.username?.toLowerCase().includes(search?.toLowerCase()) &&
          employee.role !== "supervisor"
      );

      setAccounts(filteredAccounts);
      console.log(filteredAccounts);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="head-tabel"
        style={{
          backgroundColor: " #d6c7ae",
        }}
      >
        <Navbar
          bg="primary"
          data-bs-theme="dark"
          expand="lg"
          className="bg-body-tertiary"
          id="navbar"
          style={{ backgroundColor: "#6c5f5b" }}
        >
          <Navbar.Brand href="/home">Sewa ruang</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/tableOrder">Approve List</Nav.Link>
              <Nav.Link href="/reportSewa">Report Sewa</Nav.Link>
              <Nav.Link href="/tabel">Table</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="btn">
              <button onClick={"handleLogout"} className="btn btn-danger">
                LOGOUT
              </button>
            </Nav>
            <NavLink to={"/profile"}>
              <Nav>
                <button
                  onClick={"handleprofil"}
                  className="btn btn-secondary"
                  variant="secondary"
                >
                  PROFILE
                </button>
              </Nav>
            </NavLink>
          </Navbar.Collapse>
        </Navbar>
        <br />
        <div className="body-tabel">
          <div>
            <div className="body1-home">
              <h1>Dz's Rental Rooms</h1>
              <br />

              <br />
              <h5 style={{ width: "500px", textAlign: "center" }}>
                Ciptakan ruangan impian anda dengan memilih fasilitas dengan
                sesuai kebutuhan Anda
              </h5>
              <br />
              <br />
              <br></br>
              <br></br>
            </div>
          </div>
          <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            margin:"10px"
          }}>
              <input
                type="text"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: "400px",
                  height: "40px",
                  fontSize: "15px",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
              />
              <span>
                <select
                  value={recordsPerPage}
                  onChange={(e) =>
                    setCurrentPage(1) ||
                    setRecordsPerPage(Number(e.target.value))
                  }
                  style={{
                    width: "100px",
                    height: "40px",
                    fontSize: "15px",
                    borderRadius: "5px",
                    marginRight: "10px",
                  }}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                </select>
              </span>
            </div>
          <div className="table-tabel">
            <Table striped bordered hover className="thead-tabel" style={{}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Ruang</th>
                  <th>Lantai</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>2</td>
                  <td>2</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>2</td>
                  <td>2</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>3</td>
                  <td>2</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>1</td>
                  <td>3</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>2</td>
                  <td>3</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>3</td>
                  <td>3</td>
                  <td style={{}}>
                    <button className="btn-edt-tabel">Edit</button>
                    <button className="btn-dlt-home">Delete</button>
                  </td>
                </tr>
              </tbody>
            </Table>
            <div>
              <Link className="d-grid gap-2" to="/create">
                <Button className="btn-lnk" size="lg">
                  Create
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: " #6c5f5b",
            width: "500px",
            padding: "20px",
            borderRadius: "40px 5px",
            margin: "80px 80px 40px 80px",
            marginLeft: "370px",
          }}
        >
          <div
            style={{
              color: "white",
            }}
          >
            <h3>Thank you for choosing Dz's Rental Rooms!</h3>
            <p>For inquiries or assistance, please contact our support team.</p>
          </div>
        </div>

        <div
          className="icons"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "700px",
            backgroundColor: "lightgray",
            padding: "10px",

            // border:"1px solid green",
          }}
        >
          <div
            style={
              {
                // border:"1px solid yellow",
              }
            }
          >
            {" "}
            <p
              style={{
                margin: 0,
              }}
            >
              Hak Cipta © dzkyalftnnfs2023
            </p>
          </div>
          <div
            className="a.href"
            style={{
              display: "flex",
              gap: "20px",
              color: "#967E76",
            }}
          >
            <a href="https://www.instagram.com/dzkyalfyatnnfs/">Instagram</a>
            {/* </div>
<div> */}
            <a href="https://www.twitter.com">Twitter</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabel;
