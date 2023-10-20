import React from "react";
import welcome from "../assets/logo_welcome.svg";

const Sambutan = () => {
  return (
    <>
      <div style={{ backgroundColor: "lightgrey", padding: "5px 0px" }}>
        {" "}
        <div
          className="body"
          style={{
            textAlign: "center",
            fontFamily: "serif",
            backgroundColor: "lightgrey",
            margin: "0",
          }}
        >
          <h1>SAMBUTAN UNTUK PENGGUNA</h1>
        </div>{" "}
        <div
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            height: "200px",
          }}
        >
          <img src={welcome} alt="welcome" style={{}} />
        </div>
        <div
          style={{
            backgroundColor: "#D6C7AE",
          }}
        >
          {" "}
          <div style={{ marginLeft: "50px" }}>
            <h3>Kenapa Memilih Kami??</h3>
          </div>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              gap: "50px",
            }}
          >
            {" "}
            <div style={{}}>
              <p>
                Kami tahu bagaimana menciptakan ruang yang nyaman dan efisien
                untuk memenuhi kebutuhan Anda, dari pertemuan bisnis hingga
                acara santai.
              </p>
            </div>{" "}
            <div>
              <p>
                Dengan harga terjangkau dan pelayanan prima, kami siap membantu
                Anda untuk mencapai kesuksesan bersama kami.
              </p>
            </div>
          </div>{" "}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "150px",
              marginTop: "50px",
              height: "100px",
              // border: "1px solid yellow",
            }}
          >
            <div
              style={{
                fontSize: "50px",
                //   border: "1px solid red",
                backgroundColor: "#DAC0A3",
                width: "30%",
                //   marginLeft:"200px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "10px",
              }}
            >
              <bold>
                {" "}
                <p
                  style={{
                    margin: 0,
                  }}
                >
                  500
                </p>
              </bold>
            </div>
            <div
              style={{
                //   border: "1px solid red",
                backgroundColor: "#DAC0A3",
                width: "30%",
                textAlign: "center",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                marginLeft: "150px",
              }}
            >
              <p>
                ruangan indah dan nyaman telah disewakan kepada klien kami yang
                senang dan puas.
              </p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div
            className="promosi"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "100px",
            }}
          >
            <div
              className="hemat"
              style={{
                backgroundColor: "#DAC0A3",
                width: "300px",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <p>Hemat</p>
              <h3>Rp199.000</h3>
              <ul>
                <li>Ruang Kecil</li>
                <li>Wifi Gratis</li>
                <li>AC</li>
                <li>LCD Proyektor</li>
              </ul>
              <button>Daftar Sekarang</button>
            </div>
            <div
              className="terbaik"
              style={{
                backgroundColor: "#DAC0A3",
                width: "300px",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <p>Terbaik</p>
              <h3>Rp349.000</h3>
              <ul>
                <li>Ruang Besar</li>
                <li>Wifi Gratis</li>
                <li>AC</li>
                <li>Audio Set</li>
              </ul>
              <div>
                {" "}
                <button>Daftar Sekarang</button>
              </div>
            </div>
            <div
              className="eksklusif"
              style={{
                backgroundColor: "#DAC0A3",
                width: "300px",
                borderRadius: "15px",
                textAlign: "center",
              }}
            >
              <p>Eksklusif</p>
              <h3>Rp499.000</h3>
              <ul>
                <li>Ruang Eksklusif</li>
                <li>Wifi Gratis</li>
                <li>AC</li>
                <li>Layanan Gratis</li>
              </ul>
              <button>Daftar Sekarang</button>
            </div>
          </div>
          <br />
          <hr />
          <div className="penutupan">
            {" "}
            <div
              style={{
                marginLeft: "20px",
              }}
            >
              <bold>
                {" "}
                <h1>FAQ</h1>
              </bold>
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                gap: "70px",
                margin: "10px 110px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                {" "}
                <p>
                  Apa saja fasilitas yang disediakan? Fasilitas yang disediakan
                  termasuk WiFi, AC, proyektor, dan ruangan.
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <p>
                  Dapatkah saya melihat ruangan terlebih dahulu? Tentu, Anda
                  dapat mengatur jadwal untuk melihat ruangan sesuai dengan
                  kebutuhan Anda.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                gap: "50px",
                margin: "10px 100px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <p>
                  Bagaimana proses pembayaran? Pembayaran dapat dilakukan
                  melalui transfer bank sesuai instruksi yang diberikan.
                </p>
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                {" "}
                <p>
                  Apakah ada syarat dan ketentuan? Silakan kunjungi halaman
                  Syarat dan Ketentuan di situs web kami untuk informasi lebih
                  lanjut.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <hr />
          <div
            className="end"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px",
              gap: "200px",
            }}
          >
            <div>
              <p>Perusahaan</p>
              <p>Tentang</p>
              <p>Karir</p>
              <p>Kontak</p>
            </div>
            <div>
              <p>Layanan</p>
              <p>Ruang</p>
              <p>Harga</p>
              <p>FAQ</p>
            </div>
            <div>
              <p>Hukum</p>
              <p>Kebijakan</p>
              <p>Syarat</p>
              <p>Privasi</p>
            </div>
          </div>
          <div
            className="icons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "700px",
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
                Hak Cipta © Sewa Ruang Impian 2023
              </p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "10px",
                // border:"1px solid black",
              }}
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </span>
              <></>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  fill="currentColor"
                  class="bi bi-twitter"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </span>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
export default Sambutan;
