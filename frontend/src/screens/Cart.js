import React, { useEffect, useRef, useState } from "react";
import book from "../assets/SGK.jpg";
import "../scss/cart.scss";

const cartProduct = [
  {
    id: 1,
    img: book,
    book: "Sách giáo khoa",
    price: "30.000",
    aprice: "23.000",
    vote: "5.0",
    quantity: 1,
  },
  {
    id: 2,
    img: book,
    book: "Sách giáo khoa toán",
    price: "50.000",
    aprice: "33.000",
    vote: "5.0",
    quantity: 1,
  },
  {
    id: 3,
    img: book,
    book: "Sách",
    price: "35.000",
    aprice: "13.000",
    vote: "5.0",
    quantity: 3,
  },
  {
    id: 4,
    img: book,
    book: "Sách giáo khoa toán",
    price: "20.000",
    aprice: "9.000",
    vote: "5.0",
    quantity: 4,
  },
];

function Cart() {
  const [cartBooks, setCart] = useState(cartProduct); //array of book product (can be changed)
  const [selectedBook, setSelected] = useState(-1); //book id in cart that need to change the quantity

  const sum = () => {
    let s = 0;

    for (var i = 0; i < cartProduct.length; i++) {
      s += parseInt(cartProduct[i].aprice) * parseInt(cartProduct[i].quantity);
    }
    return s;
  };

  const deleteBook = (id) => {
    setCart(cartBooks.filter((book) => book.id !== id));
  };

  return (
    <div className="cart-container">
      <h1>GIỎ HÀNG</h1>
      <div className="cart-list">
        {cartBooks.map((p) => (
          <div className="cart-detail">
            <input className="cart-checkbox" type="checkbox"></input>
            <a href="/">
              <img src={p.img} alt="book"></img>
            </a>
            <div className="cart-item-description">
              <a href="/">{p.book}</a>
              <p>Giá gốc: {p.price + " vnd"}</p>
              <p>Giá sau giảm: {p.aprice + " vnd"}</p>
            </div>

            <div className="cart-item-quantity">
              <div className="quantity-management">
                <button type="button">-</button>
                <p>{p.quantity}</p>
                <button type="button">+</button>
              </div>
              <button
                className="delete-button"
                type="button"
                onClick={() => deleteBook(p.id)}
              >
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="payment">
        <h2>Tổng tiền: {sum()}.000 VND</h2>
      </div>
      <button className="checkout-button" type="button">
        Thanh toán
      </button>
    </div>
  );
}

export default Cart;
