import React from "react";
import keluarga from "../assets/ruang-keluarga.png";
import rapat from "../assets/ruang-rapat.jpg";
import ruang from "../assets/ruang-keluarga-nyaman-cover.jpg";
import "../components/Home.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const userRole = localStorage.getItem("UserROle");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/sambutan");
    Swal.fire({
      position: "top-middle",
      icon: "success",
      title: "LOGOUT Berhasil!!",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  return (
    <>
    {userRole === "supervisor" ? (
  <div className="head-home bg-orange-100 w-screen sm:w-screen md:e-screen  overvlow-x-hidden">
  <>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between ">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden block ">
            <button
              type="button"
              class=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5 "></span>
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <a
                  href="/home"
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="/tabel"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Rooms
                </a>
                <a
                  href="/order"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Order
                </a>

                <a
                  href="/reportsewa"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Report sewa
                </a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">View notifications</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button>
            <div class="relative ml-3">
              <div>
                <button
                  type="button"
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </button>
              </div>

              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabindex="-1"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  Link
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  Link
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <Link
                  type="submit"
                  onClick={handleLogout}
                  class="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabindex="-1"
                  Link
                  id="user-menu-item-2"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="block md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <a
            href="/home"
            class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="/tabel"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Rooms
          </a>
          <a
            href="/order"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Order
          </a>
         

          <a
            href="/reportsewa"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Report Sewa
          </a>
        </div>
      </div>
    </nav>

    <br />
    <div className="body1-home flex flex-col items-center body1-home grid grid-cols-2 gap-8 mx-auto p-4 lg:p-8">
      <h1 className="font-bold text-2xl">Dz's Rental Home</h1>
      <div className="img-wrap-home flex justify-center text-center">
        <img
          src={ruang}
          alt="ruangan"
          className="img-home w-[250px] md:w-[550px] lg:w-[700px] rounded-[10px] "
        />
      </div>
      <br />
      <p>Ciptakan ruangan impian anda</p>
      <div className="bg-stone-500 rounded-[10px]  text-[white] p-2">
        <button to className="bg-stone-500 h-[25px] text-[]">
          <Link to="/register">Daftar Sekarang!</Link>
        </button>
      </div>

      <div className="span-wrap-home flex gap-[25px] ">
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
    </div>
    <br />
    <br />
    <div
      style={{
        backgroundColor: "lightgray",
        padding: "50px",
        margin: "0px 0",
      }}
    >
      <div className="gap-[20px] flex flex-col md:flex md:flex-row items-center justify-center">
        <div className="img-rapat-home w-full md:w-[450px] h-[250px]">
          <img
            src={rapat}
            alt="ruang-keluarga"
            className="img-keluarga rounded-[5px]
            w-full md:w-[450px] h-full 
              "
          />
        </div>
        <div className="rapat w-full  md:w-[450px] text-center space-y-4">
          <h1 className="font-bold text-3xl w-full ">Ruang Rapat Indoor</h1>
          <p>
            Ruang rapat yang indah dan nyaman untuk mendukung kelancaran
            rapat Anda
          </p>
          <button className="btn2-home    py-[4px] px-[10px]">
            Lihat Detail
          </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="gap-[20px] flex flex-col md:flex md:flex-row items-center justify-center ">
        <div className="img-rapat-home w-full md:w-[450px] h-[250px] block md:hidden ">
          <img
            src={keluarga}
            alt="ruang-keluarga"
            className="img-keluarga rounded-[5px]
            w-full md:w-[650px] h-full block md:hidden
              "
          />
        </div>
        <div className="rapat w-full md:w-[450px]  text-center space-y-4">
          <h1 className="font-bold text-3xl w-full">Ruang Keluarga</h1>
          <p>
            Ruang keluarga dengan sensasi alam yang menenangkan siap membuat
            keluarga Anda lebih harmonis
          </p>
          <button className="btn2-home py-[4px] px-[10px]">
            Lihat Detail
          </button>
        </div>
        <div className="img-rapat-home w-[20px] md:w-[450px] h-[250px] hidden md:block">
          <img
            src={keluarga}
            alt="ruang-keluarga"
            className="img-keluarga rounded-[5px]
            w-[10px] md:w-[450px] h-full hidden md:block
              "
          />
        </div>
      </div>
    </div>
    <br />
    <div
      className="body3-home text-center flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 lg:p-8
"
    >
      <h1 className="font-bold text-4xl">FAQ</h1>
      <div className="bg-500 w-full flex flex-col items-center justify-center sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200 text-center bg-[#a8a29e] mt-[15px]">
        <p></p>
        <details className="flex justify-center text-center">
          <summary class="bg-[] question py-3 px-4 cursor-pointer select-none w-full">
            Apakah ruang dapat disesuaikan dengan tema atau kebutuhan acara
            saya?
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
            Jangan ragu untuk bertanya lebih lanjut tentang rincian parkir.
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

    <br />
    <br />
    <br />
    <div className="icons block text-center md:flex md:justify-between p-[20px] bg-gray-400 p-[10px] ">
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
        className="a.href text-center text-white flex justify-center"
        style={{
          display: "flex",
          gap: "20px",
          color: "",
        }}
      >
        <a
          className=" hover:underline"
          href="https://www.instagram.com/dzkyalfyatnnfs/"
          target="_blank"
        >
          Instagram
        </a>
        {/* </div>
<div> */}
        <a
          className=" hover:underline"
          href="https://www.twitter.com"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </div>
  </>
</div>
    ) : (
      <div className="head-home bg-orange-100 w-screen sm:w-screen md:e-screen  overvlow-x-hidden">
      <>
        <nav class="bg-gray-800">
          <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between ">
              <div class="absolute inset-y-0 left-0 flex items-center md:hidden block ">
                <button
                  type="button"
                  class=" relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span class="absolute -inset-0.5 "></span>
                  <span class="sr-only">Open main menu</span>

                  <svg
                    class="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>

                  <svg
                    class="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex flex-shrink-0 items-center">
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div class="hidden sm:ml-6 sm:block">
                  <div class="flex space-x-4">
                    <a
                      href="/home"
                      class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current="page"
                    >
                      Home
                    </a>

                    <a
                      href="/tabel"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Rooms
                    </a>
                    <a
                      href="/order"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Order
                    </a>
                    <a
                      href="/costumer"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Costumer
                    </a>

                    <a
                      href="/reportsewa"
                      class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Report sewa
                    </a>
                  </div>
                </div>
              </div>
              <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5"></span>
                  <span class="sr-only">View notifications</span>
                  <svg
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
                <div class="relative ml-3">
                  <div>
                    <button
                      type="button"
                      class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span class="absolute -inset-1.5"></span>
                      <span class="sr-only">Open user menu</span>
                      <img
                        class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </button>
                  </div>

                  <div
                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      Link
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      Link
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <Link
                      type="submit"
                      onClick={handleLogout}
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      Link
                      id="user-menu-item-2"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="block md:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2">
              <a
                href="/home"
                class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                Linkome
              </a>
              <a
                href="/tabel"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Rooms
              </a>
              <a
                href="/order"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Order
              </a>

              <a
                href="/reportsewa"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Report Sewa
              </a>
            </div>
          </div>
        </nav>

        <br />
        <div className="body1-home flex flex-col items-center body1-home grid grid-cols-2 gap-8 mx-auto p-4 lg:p-8">
          <h1 className="font-bold text-2xl">Dz's Rental Home</h1>
          <div className="img-wrap-home flex justify-center text-center">
            <img
              src={ruang}
              alt="ruangan"
              className="img-home w-[250px] md:w-[550px] lg:w-[700px] rounded-[10px] "
            />
          </div>
          <br />
          <p>Ciptakan ruangan impian anda</p>
          <div className="bg-stone-500 rounded-[10px]  text-[white] p-2">
            <button to className="bg-stone-500 h-[25px] text-[]">
              <Link to="/register">Daftar Sekarang!</Link>
            </button>
          </div>

          <div className="span-wrap-home flex gap-[25px] ">
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
        </div>
        <br />
        <br />
        <div
          style={{
            backgroundColor: "lightgray",
            padding: "50px",
            margin: "0px 0",
          }}
        >
          <div className="gap-[20px] flex flex-col md:flex md:flex-row items-center justify-center">
            <div className="img-rapat-home w-full md:w-[450px] h-[250px]">
              <img
                src={rapat}
                alt="ruang-keluarga"
                className="img-keluarga rounded-[5px]
                w-full md:w-[450px] h-full 
                  "
              />
            </div>
            <div className="rapat w-full  md:w-[450px] text-center space-y-4">
              <h1 className="font-bold text-3xl w-full ">Ruang Rapat Indoor</h1>
              <p>
                Ruang rapat yang indah dan nyaman untuk mendukung kelancaran
                rapat Anda
              </p>
              <button className="btn2-home    py-[4px] px-[10px]">
                Lihat Detail
              </button>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="gap-[20px] flex flex-col md:flex md:flex-row items-center justify-center ">
            <div className="img-rapat-home w-full md:w-[450px] h-[250px] block md:hidden ">
              <img
                src={keluarga}
                alt="ruang-keluarga"
                className="img-keluarga rounded-[5px]
                w-full md:w-[650px] h-full block md:hidden
                  "
              />
            </div>
            <div className="rapat w-full md:w-[450px]  text-center space-y-4">
              <h1 className="font-bold text-3xl w-full">Ruang Keluarga</h1>
              <p>
                Ruang keluarga dengan sensasi alam yang menenangkan siap membuat
                keluarga Anda lebih harmonis
              </p>
              <button className="btn2-home py-[4px] px-[10px]">
                Lihat Detail
              </button>
            </div>
            <div className="img-rapat-home w-[20px] md:w-[450px] h-[250px] hidden md:block">
              <img
                src={keluarga}
                alt="ruang-keluarga"
                className="img-keluarga rounded-[5px]
                w-[10px] md:w-[450px] h-full hidden md:block
                  "
              />
            </div>
          </div>
        </div>
        <br />
        <div
          className="body3-home text-center flex flex-col justify-center items-center max-w-screen-xl mx-auto p-4 lg:p-8
  "
        >
          <h1 className="font-bold text-4xl">FAQ</h1>
          <div className="bg-500 w-full flex flex-col items-center justify-center sm:w-1/2 lg:w-96 border border-gray-200 divide-y divide-gray-200 text-center bg-[#a8a29e] mt-[15px]">
            <p></p>
            <details className="flex justify-center text-center">
              <summary class="bg-[] question py-3 px-4 cursor-pointer select-none w-full">
                Apakah ruang dapat disesuaikan dengan tema atau kebutuhan acara
                saya?
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
                Jangan ragu untuk bertanya lebih lanjut tentang rincian parkir.
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

        <br />
        <br />
        <br />
        <div className="icons block text-center md:flex md:justify-between p-[20px] bg-gray-400 p-[10px] ">
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
            className="a.href text-center text-white flex justify-center"
            style={{
              display: "flex",
              gap: "20px",
              color: "",
            }}
          >
            <a
              className=" hover:underline"
              href="https://www.instagram.com/dzkyalfyatnnfs/"
              target="_blank"
            >
              Instagram
            </a>
            {/* </div>
  <div> */}
            <a
              className=" hover:underline"
              href="https://www.twitter.com"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </div>
      </>
    </div>
    )}
    
    </>
  
  );
};

export default Home;
