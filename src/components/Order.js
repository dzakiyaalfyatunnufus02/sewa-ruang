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

const Order = () => {
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
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="/sambutan"
                      class="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
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
                href="/costumer"
                class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Costumer
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
        <div className="body-tabel">
          <div>
            <div className="body1-home">
              <h1 className="font-bold text-2xl">Dz's Rental Orders</h1>
              <br />

              <br />
              <h5 className="w-[250px] md:w-[500px] text-center text-[15px] md:text-[18px] lg:text-[20px]">
                Ciptakan ruangan impian anda dengan memilih fasilitas dengan
                sesuai kebutuhan Anda
              </h5>
              <br />
              <br />
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="flex items-center gap-[10px] md:gap-[25px] justify-center m-[10px]">
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[150px] h-[30px] md:w-[200px] lg:w-[400px] lg:h-[40px] text-[15px] rounded-[5px] md:py-[10px] md:px-[10px] p-[5px]"
            />
            <span>
              <select
                value={recordsPerPage}
                onChange={(e) =>
                  setCurrentPage(1) || setRecordsPerPage(Number(e.target.value))
                }
                className="w-[60px] h-[30px] lg:w-[100px] lg:h-[40px] text-[15px] rounded-[5px] mr-[10px]"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </span>
            <div>
              <Link
                className="d-grid gap-2 flex justify-center "
                to="/addorder"
              >
                <Button className="text-[13px] md:text-[15px] lg:text-[18px] bg-stone-700 text-center flex items center justify-center w-[50px] md:w-[80px] lg:w-[100px]">
                  Create
                </Button>
              </Link>
            </div>
          </div>
          <div className="table-tabel ">
            <div class="rounded-lg  w-full lg:px-5 md:px-[25px] flex flex-col items-center justify-center text-center p-[10px]">
              <div class="overflow-x-auto rounded-t-lg w-full ">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm  ">
                  <thead class="ltr:text-left rtl:text-right">
                    <tr>
                      <th class="whitespace-nowrap px-4 py-2   text-xs md:font-medium text-gray-900">
                        ROOM
                      </th>
                      <th class="whitespace-nowrap px-4 py-2  text-xs md:font-medium text-gray-900">
                        CAPACITY{" "}
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-xs md:font-medium text-gray-900">
                        SNACK{" "}
                      </th>
                      <th class="whitespace-nowrap px-4 py-2 text-xs md:font-medium text-gray-900">
                        LUNCH{" "}
                      </th>
                      <th class="whitespace-nowrap px-4 py-2  text-xs md:font-medium text-gray-900">
                        EXTRATIME{" "}
                      </th>
                      <th class="whitespace-nowrap px-4 py-2  text-xs md:font-medium text-gray-900">
                        BOOKING{" "}
                      </th>
                      <th class="whitespace-nowrap px-4 py-2  text-xs md:font-medium text-gray-900">
                        Action{" "}
                      </th>
                    </tr>
                  </thead>

                  <tbody class="divide-y divide-gray-200 text-[12px] md:text-[15px]">
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        single bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        3 poeple{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        3 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700 gap-[10px]">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>

                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        two bad
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        2 pepole{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        2 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>

                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        single bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        4 pepole
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        5 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        5 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        5 pepole{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        3 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        9 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        7 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        7 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        5 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        1 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        1 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        6 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        5 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        5 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        3 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        4 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        10 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        8 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        10 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        1 week{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        4 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        6 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        7 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        5 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        7 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        3 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td class="whitespace-nowrap px-4 py-2  text-gray-900">
                        6 bad{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        6 people{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        tidak ada{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        4 days{" "}
                      </td>
                      <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                        <Link to="/editorder">
                          {" "}
                          <button className="text-white bg-gray-400 px-[12px] py-[4px] rounded-[10px] mr-[15px]">
                            Edit
                          </button>
                        </Link>{" "}
                        <button className=" text-white bg-stone-500 px-[12px] py-[4px] rounded-[10px] ">
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="rounded-b-lg border-t border-gray-200 px-4 py-2">
                <ol class="flex justify-end gap-1 text-xs font-medium">
                  <li>
                    <a
                      href="#"
                      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span class="sr-only">Prev Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      1
                    </a>
                  </li>

                  <li className="block h-8 w-8 rounded border-stone-600 bg-stone-600 text-center leading-8 text-white">
                    2
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      3
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                    >
                      4
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                    >
                      <span class="sr-only">Next Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center">
          <div className="text-[white] text-center bg-[#6c5f5b]  w-[300px]   md:w-[500px] lg:w-[700px]  md:w-[500px]   rounded-tr-[50px] rounded-bl-[50px] lg:p-[40px] p-[20px] lg:mt-[20px] lg:mb-[20px] md:mt-[15px] md:mb-[15px] mt-[10px] mb-[10px]">
            <h3 className="text-[13px] md:text-[16px] lg:text-[25px]">
              Thank you for choosing Dz's Rental Rooms!
            </h3>
            <p className="text-[10px] md:text-[14px] lg:text-[18px]">
              For inquiries or assistance, please contact our support team.
            </p>
          </div>
        </div>

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
            <a className=" hover:underline" href="https://www.twitter.com" target="_blank">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
