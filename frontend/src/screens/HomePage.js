import React from "react";
import "../scss/homepage.scss";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "./Sidebar";

import book from "../assets/SGK.jpg";
import { Outlet, NavLink } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Sách giáo khoa",
    name: [
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
    ],
  },
  {
    id: 2,
    title: "Sách giáo khoa",
    name: [
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
    ],
  },
  {
    id: 3,
    title: "Sách giáo khoa",
    name: [
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
      {
        book: "Sách giáo khoa toán",
        price: "30.000 vnd",
        vote: "5.0",
      },
    ],
  },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <div className="homepage__banner"></div>
      <Sidebar />
      <div className="homepage__cover">
        <div className="homepage__displayData">
          {items.map((item) => (
            <div>
              <div className="homepage__displayData__title">{item.title}</div>
              <div className="homepage__displayData__content">
                {item.name.map((subitem) => (
                  <div className="homepage__displayData__inf">
                    <div className="homepage__displayData__cover">
                      <NavLink to="/home_page/1">
                        <img
                          className="homepage__displayData__book"
                          src={book}
                          alt="book"
                        />
                      </NavLink>

                      <div className="homepage__displayData__book__inf">
                        <div>Tên sách: {subitem.book}</div>
                        <div>Giá: {subitem.price}</div>
                        <div>Đánh giá: {subitem.vote} /5.0</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default HomePage;
