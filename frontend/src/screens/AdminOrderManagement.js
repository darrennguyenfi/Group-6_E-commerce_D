import React, { useState } from "react";
import book from "../assets/SGK.jpg";
import "../scss/admin.scss";
import AdminNavbar from "../components/AdminNavbar";

const orderProduct = [
  [
    2,
    {
      id: 1,
      img: book,
      book: "Sách giáo khoa",
      price: "30.000",
      vote: "5.0",
      quantity: 1,
    },
    {
      id: 2,
      img: book,
      book: "Sách",
      price: "60.000",
      vote: "5.0",
      quantity: 1,
    },
    {
      id: 3,
      img: book,
      book: "Sách toán",
      price: "40.000",
      vote: "5.0",
      quantity: 3,
    },
  ],
  [
    1,
    {
      id: 1,
      img: book,
      book: "Giáo khoa toán",
      price: "30.000",
      vote: "5.0",
      quantity: 1,
    },
    {
      id: 2,
      img: book,
      book: "Khoa toán",
      price: "20.000",
      vote: "5.0",
      quantity: 2,
    },
  ],
  [
    3,
    {
      id: 1,
      img: book,
      book: "Giáo khoa toán",
      price: "30.000",
      vote: "5.0",
      quantity: 1,
    },
    {
      id: 2,
      img: book,
      book: "Khoa toán",
      price: "20.000",
      vote: "5.0",
      quantity: 2,
    },
  ],
];

function AdminOrderManagement() {
  const [currStatus, setStatus] = useState(0);
  const [statusOpen, setOpenStatus] = useState(false);
  const statusList = [0, 1, 2, 3];

  const status = (num) => {
    if (num === 1) {
      return "Đang giao";
    } else if (num === 2) {
      return "Đã hoàn thành";
    } else if (num === 3) {
      return "Đã hủy";
    } else if (num === 0) {
      return "Tất cả";
    } else {
      return "";
    }
  };

  const buttonName = (pType) => {
    if (pType === 1) {
      return "Đánh giá";
    } else if (pType === 2) {
      return "Hủy";
    } else if (pType === 3) {
      return "Mua lại";
    } else {
      return "";
    }
  };

  return (
    <div className="order-management-container">
      <div className="order-management-sort">
        <div className="order-status-widgets">
          <p>Loại Order:</p>
          <div className="status-dropdown-widgets">
            <input placeholder={status(currStatus)} disabled></input>
            <button type="button" onClick={() => setOpenStatus(!statusOpen)}>
              V
            </button>
          </div>
        </div>
        {statusOpen && (
          <div className="order-status-dropdown">
            {statusList.map((s) => (
              <button
                className="status"
                type="button"
                onClick={() => {
                  setStatus(s);
                  setOpenStatus(false);
                }}
              >
                {status(s)}
              </button>
            ))}
          </div>
        )}
      </div>
      <AdminNavbar />
      <div className="admin-order-list">
        <div className="admin-order">
          {orderProduct.map((p) => {
            if (p[0] === currStatus || currStatus === 0) {
              return (
                <div className="order-detail">
                  <p className="order-status">{status(p[0])}</p>
                  <hr></hr>

                  <div className="admin-order-product">
                    {p.map((product, index) => {
                      if (index === 0) {
                        return null;
                      } else if (index > 0 && index < p.length) {
                        return (
                          <div className="admin-order-product-detail">
                            <a href="/">
                              <img src={product.img} alt={product.book}></img>
                            </a>
                            <div className="order-product-detail">
                              <h3>{product.book}</h3>
                              <p>Giá: {product.price}</p>
                              <p>Số lượng: {product.quantity}</p>
                            </div>
                            <button className="button" type="button">
                              {buttonName(p[0])}
                            </button>
                          </div>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>

                  <hr></hr>
                  <div className="order-management">
                    <button className="accept-order" type="button">
                      Chấp nhận
                    </button>
                    <button className="deny-order" type="button">
                      Hủy bỏ
                    </button>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="order-list"></div>
    </div>
  );
}

export default AdminOrderManagement;
