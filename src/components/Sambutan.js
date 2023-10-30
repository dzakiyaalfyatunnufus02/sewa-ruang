import React from "react";
import welcome from "../assets/logo_welcome.svg";
import { Link } from "react-router-dom";

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
          <h1 className="lg:text-[30px] font-[bold] md:text-[20px]">
            SAMBUTAN UNTUK PENGGUNA
          </h1>
        </div>{" "}
        <div className="lg:mt-[50px] flex justify-center lg:h-[200px] mt-[20px] ">
          <img
            src={welcome}
            alt="welcome"
            className="lg:p-[10px] md:p-[15px] p-[5px]"
            style={{}}
          />
        </div>
        <div
          style={{
            backgroundColor: "#D6C7AE",
          }}
        >
          {" "}
          <div className="text-[17px] lg:p-[35px] p-[15px] flex flex-col md:flex-col items-center justify-center text-center w-full text-center  text-[15px] ">
            <bold className="flex justify-center items center text-center font-bold">
              Kenapa Memilih Kami??
            </bold>

            <p>
              Dengan harga terjangkau dan pelayanan prima, kami siap membantu
              Anda untuk mencapai kesuksesan bersama kami.
            </p>
          </div>
          <div className="mt-[15px] flex  justify-center items-center md:gap-[200px] gap-[5px]  lg:mt-[50px] lg:h-[100px] ">
            <div className="text-[50px] text-center w-[150px] h-[118px] flex  items-center  bg-[#DAC0A3] gap-[0px] md:gap-[150px] lg:w-[30%] md:w-[25%] text-center items-center justify-center rounded-[10px]">
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
            <div className="flex items-center p-[10px] text-[15px]   lg:text-[20px] bg-[#DAC0A3] gap-[0px] md:gap-[150px] w-[150px] h-[118px] lg:w-[30%] md:w-[25%] text-center items-center justify-center rounded-[10px]">
              <p>
                ruangan indah dan nyaman telah disewakan kepada klien kami yang
                senang dan puas.
              </p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <div className="romosi flex flex-col md:flex-row lg:flex-row justify-center p-[10px] gap-[10px] lg:gap-[100px] md:gap-[20px]">
            <div className=" bg-[#DAC0A3] w-[300px] p-[5px] lg:w-[300px] md:w-[200px] rounded-[15px] flex flex-col items-center justify-center text-center">
              <p className="text-b">Hemat</p>
              <h3>Rp199.000</h3>
              <ul>
                <li>Ruang Kecil</li>
                <li>Wifi Gratis</li>
                <li>AC</li>
                <li>LCD Proyektor</li>
              </ul>
              <button className="bg-[#6C5F5B] text-white p-[1px] rounded-[5px] lg:w-[150px]  text-center  lg:rounded-[10px]">
                <Link to="/register">Daftar Sekarang</Link>
              </button>
            </div>
            <div className="terbaik p-[5px] bg-[#DAC0A3] w-[300px] lg:w-[300px] md:w-[200px] rounded-[15px] flex flex-col items-center justify-center text-center">
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
                <button className="bg-[#6C5F5B] text-white p-[1px] rounded-[5px] lg:w-[150px]  text-center  lg:rounded-[10px]">
                  <Link to="/register">Daftar Sekarang</Link>
                </button>
              </div>
            </div>
            <div className="terbaik p-[5px] bg-[#DAC0A3] w-[300px] lg:w-[300px] md:w-[200px] rounded-[15px] flex flex-col items-center justify-center text-center">
              <p>Eksklusif</p>
              <h3>Rp499.000</h3>
              <ul>
                <li>Ruang Eksklusif</li>
                <li>Wifi Gratis</li>
                <li>AC</li>
                <li>Layanan Gratis</li>
              </ul>

              <button className="bg-[#6C5F5B] text-white p-[1px] rounded-[5px] lg:w-[150px]  text-center  lg:rounded-[10px]">
                <Link to="/register" target="blank">
                  Daftar Sekarang
                </Link>
              </button>
            </div>
          </div>
          <br />
          <hr />
          <div
            className="body3-home text-center flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 lg:p-8
"
          >
            <h1 className="font-bold text-4xl">FAQ</h1>
            <div className="bg-500 w-full flex flex-col items-center justify-center sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200 text-center bg-[#a8a29e] mt-[15px]">
              <p></p>
              <details className="flex justify-center text-center">
                <summary class="bg-[] question py-3 px-4 cursor-pointer select-none w-full">
                  Apakah ruang dapat disesuaikan dengan tema atau kebutuhan
                  acara saya?
                </summary>
                <p class="pt-1 pb-3 px-4">
                  Ya, kami menyediakan opsi untuk menyesuaikan dekorasi dan tata
                  letak ruang sesuai tema atau kebutuhan khusus acara Anda.
                </p>
              </details>
              <details className="flex justify-center text-center">
                <summary class="bg-[] question py-3 px-4 cursor-pointer select-none w-full">
                  Bagaimana dengan parkir? Apakah ada fasilitas parkir yang
                  tersedia?{" "}
                </summary>
                <p class="pt-1 pb-3 px-4">
                  Kami menyediakan fasilitas parkir yang nyaman untuk tamu kami.
                  Jangan ragu untuk bertanya lebih lanjut tentang rincian
                  parkir.
                </p>
              </details>
              <details className="flex justify-center text-center">
                <summary class="bg-[] question py-3 px-4 cursor-pointer select-none w-full">
                  Apakah saya dapat melihat ruang sebelum saya memutuskan untuk
                  menyewanya?{" "}
                </summary>
                <p class="pt-1 pb-3 px-4">
                  Tentu, Anda dapat mengatur jadwal untuk tur dan melihat ruang
                  sebelum membuat keputusan. Silakan hubungi kami untuk mengatur
                  waktu yang sesuai.
                </p>
              </details>
            </div>
          </div>
          <hr />
          <div className="end flex justify-center m-[20px] lg:gap-[200px] md:gap-[100px] gap-[50px] ">
            <div className="text-[13px] lg:text-[17px]">
              <p>Perusahaan</p>
              <p>Tentang</p>
              <p>Karir</p>
              <p>Kontak</p>
            </div>
            <div className="text-[13px] lg:text-[17px]">
              <p>Layanan</p>
              <p>Ruang</p>
              <p>Harga</p>
              <p>FAQ</p>
            </div>
            <div className="text-[13px] lg:text-[17px]">
              <p>Hukum</p>
              <p>Kebijakan</p>
              <p>Syarat</p>
              <p>Privasi</p>
            </div>
          </div>
          <br />
          <div className="icons bg-[lightgray] lg:w-[100%] md:w-[100%] lg:h-[50px] flex justify-center items-center justify-between lg:px-[30px]">
            <div
              style={
                {
                  // border:"1px solid yellow",
                }
              }
            >
              {" "}
              <p className="lg:text-[15px] md:text-[13px] text-[10px] ">
                Hak Cipta © dzkyalftnnfs2023
              </p>
            </div>
            <div className="flex lg:gap-[10px] gap-[10px] py-[5px] px-[5px]">
              <a
                className=""
                href="https://www.instagram.com/dzkyalfyatnnfs/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="lg:w-[25px] md:w-[16px] w-[12px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <></>
              <a href="https://www.twitter.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="lg:w-[25px] md:w-[16px] w-[12px]"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sambutan;
