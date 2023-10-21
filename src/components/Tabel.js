import React from "react";
import "../components/Tabel.css";
import ruang from "../assets/ruang-keluarga-nyaman-cover.jpg";
import { Nav, NavDropdown, NavLink, Navbar, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Tabel = () => {
  return (
    <>
      <div className="head-tabel">
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
              <Nav.Link href="/table">Table</Nav.Link>
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
              <div className="img-wrap-home">
                <img src={ruang} alt="ruangan" className="img-home" />
              </div>
              <br />
              <p>
                Ciptakan ruangan impian anda dengan memilih fasilitas dengan
                sesuai kebutuhan Anda
              </p>
              <br />
              <br />
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="table-tabel">
            <Table striped bordered hover className="thead-tabel">
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
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>1</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>3</td>
                  <td>1</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>2</td>
                  <td>2</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>2</td>
                  <td>2</td>
                  <td>Edit</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>3</td>
                  <td>2</td>
                  <td>
                       <button>Edit</button>                        
                       <button>Delete</button>                        
                      </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>1</td>
                  <td>3</td>
                  <td>
                       <button>Edit</button>                        
                       <button>Delete</button>                        
                      </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>2</td>
                  <td>3</td>
                  <td>
                       <button>Edit</button>                        
                       <button>Delete</button>                        
                      </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>3</td>
                  <td>3</td>
                     <td>
                       <button>Edit</button>                        
                       <button>Delete</button>                        
                      </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tabel;
