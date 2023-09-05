import React, { useState } from "react";
import book from "../assets/SGK.jpg";
import "../scss/user.scss";

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

function UserOrder() {
  const [currCategory, setCategory] = useState(0);
  const orderCategory = ["Tất cả", "Đang giao", "Đã hoàn thành", "Đã hủy"];
  const status = (num) => {
    if (num === 1) {
      return "Đang giao";
    } else if (num === 2) {
      return "Đã hoàn thành";
    } else if (num === 3) {
      return "Đã hủy";
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

  const setFocus = (e) => {
    console.log(e.target.className);
    if (e.relatedTarget === null) {
      e.target.focus();
    }
  };

  return (
    <div className="user-order-container">
      <button className="user-back-button" type="button">
        &lt; Back
      </button>
      <div className="user-order-category">
        {orderCategory.map((category, index) => (
          <button
            className="category-btn"
            type="button"
            onClick={() => setCategory(index)}
            onBlur={(e) => {
              setFocus(e);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="user-order-list">
        <div className="user-order">
          {orderProduct.map((p, i) => {
            if (p[0] === currCategory || currCategory === 0) {
              return (
                <div className="order-detail">
                  <p className="order-status">{status(p[0])}</p>
                  <hr></hr>

                  <div className="user-order-product">
                    {p.map((product, index) => {
                      if (index === 0) {
                        return null;
                      } else if (index > 0 && index < p.length) {
                        return (
                          <div className="user-order-product-detail">
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
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default UserOrder;
