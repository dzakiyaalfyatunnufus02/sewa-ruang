import React, { useState } from "react";
import keluarga from "../assets/ruang-keluarga.png";
import rapat from "../assets/ruang-rapat.jpg";
import ruang from "../assets/ruang-keluarga-nyaman-cover.jpg";
import "../components/Home.css";
import { Container, Nav, NavDropdown, NavLink, Navbar } from "react-bootstrap";
import { Button, Col, Collapse, ListGroup } from "react-bootstrap";

const Home = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <div></div>

      <div className="head-home">
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
        <br/>
        <div className="body1-home">
          <h1>Dz's Rental Rooms</h1>
          <div className="img-wrap-home">
            <img src={ruang} alt="ruangan" className="img-home" />
          </div>
          <br />
          <p>Ciptakan ruangan impian anda</p>
          <button className="btn1-home">Daftar Sekarang!</button>
          <br />
          <br />
          <div className="span-wrap-home">
            <span className="span-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-whatsapp"
                viewBox="0 0 16 16"
                className="span-home"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </span>
            <span className="span-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
                className="span-home"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </span>
            <span className="span-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>
            </span>
            <></>
            <span className="span-home">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </span>
          </div>
          <br></br>
          <br></br>
        </div>
        <br />
        <br />
        <br />
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "50px",
            margin: "0px 0",
          }}
        >
          <div className="body2-home">
            <div className="img-rapat-home">
              <img src={rapat} alt="ruang-rapat" className="img-rapat" />
            </div>
            <div className="rapat">
              <h1>Ruang Rapat Indoor</h1>
              <p>
                Ruang rapat yang indah dan nyaman untuk mendukung kelancaran
                rapat Anda
              </p>
              <button className="btn2-home">Lihat Hasil</button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="body2-home">
            <div className="keluarga">
              <h1>Ruang Keluarga</h1>
              <p>
                Ruang keluarga dengan sensasi alam yang menenangkan siap membuat
                keluarga Anda lebih harmonis
              </p>
              <button className="btn2-home">Lihat Detail</button>
            </div>
            <div>
              <img
                src={keluarga}
                alt="ruang-keluarga"
                className="img-keluarga"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="body3-home">
          <h1>FAQ</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <ListGroup className="transisi">
          <ListGroup.Item
            className="transisi1"
            onClick={() => setOpen1(!open1)}
            aria-controls="example-collapse-text"
            aria-expanded={open1}
          >
            <div className="span-home-svg1" >
              <p> Bagaimana cara menyewa ruangan di Dz's Rental Rooms? </p>

              <span className="span-home" style={{ paddingLeft: 0 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
              </span>
            </div>

            <Collapse in={open1} className="collapse">
              <div
                id="example-collapse-text"
                style={{
                  color: "#967E76",
                }}
              >
                <div className="card card-body">
                  Untuk menyewa ruangan di Dz's Rental Rooms, Anda dapat
                  mengikuti langkah-langkah berikut:
                  <ol>
                    <li>Kunjungi situs web kami.</li>
                    <li>Pilih ruangan yang ingin Anda sewa.</li>
                    <li>
                      Isi formulir pemesanan dengan informasi yang diperlukan.
                    </li>
                    <li>Pilih tanggal dan waktu sewa yang diinginkan.</li>
                    <li>
                      Selesaikan pembayaran sesuai dengan instruksi yang
                      diberikan.
                    </li>
                  </ol>
                  Setelah itu, Anda akan menerima konfirmasi pemesanan dan
                  petunjuk lebih lanjut.
                </div>
              </div>
            </Collapse>
          </ListGroup.Item>
          <ListGroup.Item
            className="transisi2"
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
          >
            <div className="span-home-svg2">
              <p> Apakah tersedia layanan katering untuk acara sewa ruang? </p>

              <span style={{}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
              </span>
            </div>

            <Collapse in={open2}>
              <div
                id="example-collapse-text"
                style={{
                  color: "#967E76",
                }}
              >
                <div
                  className="card card-body"
                  style={{
                    color: "#967E76",
                  }}
                >
                  Ya, kami menyediakan layanan katering untuk acara sewa ruang.
                  Anda dapat memilih paket katering yang sesuai dengan kebutuhan
                  Anda selama proses pemesanan ruangan.
                </div>
              </div>
            </Collapse>
          </ListGroup.Item>
          <ListGroup.Item
            className="transisi3"
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
          >
            <div className="span-home-svg3">
              <p> Apa yang termasuk dalam fasilitas sewa ruang?</p>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
              </span>
            </div>

            <Collapse in={open3}>
              <div id="example-collapse-text">
                <div
                  className="card card-body"
                  style={{
                    color: "#967E76",
                  }}
                >
                  Fasilitas sewa ruang mencakup:
                  <ul>
                    <li>
                      Ruang yang telah dipilih sesuai dengan kapasitas yang Anda
                      butuhkan.
                    </li>
                    <li>
                      Peralatan teknis seperti proyektor, layar, dan mikrofon
                      (jika diperlukan).
                    </li>
                    <li>Layanan pembersihan sebelum dan setelah acara.</li>
                  </ul>
                  Untuk informasi lebih lanjut, hubungi tim layanan pelanggan
                  kami.
                </div>
              </div>
            </Collapse>
          </ListGroup.Item>
        </ListGroup>
        <br />
        <br />
        <br />
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
              Hak Cipta © dzkyalftnnfs 2023
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

export default Home;
