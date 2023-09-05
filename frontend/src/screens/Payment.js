import book from "../assets/SGK.jpg";
import "../scss/cart.scss";
import voucher_img from "../assets/voucher-icon.png";
import { useState } from "react";

const cartProduct = [
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
    book: "Sách giáo khoa toán",
    price: "30.000",
    vote: "5.0",
    quantity: 1,
  },
  {
    id: 3,
    img: book,
    book: "Sách",
    price: "30.000",
    vote: "5.0",
    quantity: 3,
  },
  {
    id: 4,
    img: book,
    book: "Sách giáo khoa toán",
    price: "30.000",
    vote: "5.0",
    quantity: 4,
  },
];

const userAddress = [
  {
    id: 1,
    address: "VietNam",
  },
  {
    id: 2,
    address: "USA",
  },
  {
    id: 3,
    address: "UK",
  },
];

const testVoucher = [
  {
    id: 1,
    name: "Free ship",
    percentage: 100,
    image: voucher_img,
    type: 1,
  },
  {
    id: 2,
    name: "Giảm đồ gia dụng",
    percentage: 20,
    image: voucher_img,
    type: 2,
  },
  {
    id: 3,
    name: "Giảm đồ điện tử",
    percentage: 5,
    image: voucher_img,
    type: 2,
  },
  {
    id: 4,
    name: "Giảm giá bất kì",
    percentage: 10,
    image: voucher_img,
    type: 2,
  },
  {
    id: 5,
    name: "Free ship",
    percentage: 100,
    image: voucher_img,
    type: 1,
  },
  {
    id: 1,
    name: "Free ship",
    percentage: 100,
    image: voucher_img,
    type: 1,
  },
  {
    id: 2,
    name: "Giảm đồ gia dụng",
    percentage: 20,
    image: voucher_img,
    type: 2,
  },
  {
    id: 3,
    name: "Giảm đồ điện tử",
    percentage: 5,
    image: voucher_img,
    type: 2,
  },
  {
    id: 4,
    name: "Giảm giá bất kì",
    percentage: 10,
    image: voucher_img,
    type: 2,
  },
  {
    id: 5,
    name: "Free ship",
    percentage: 100,
    image: voucher_img,
    type: 1,
  },
];

function Payment() {
  const [openVoucher, setOpen] = useState(false);
  const [openAddr, setOpenAddr] = useState(false);
  const [currAddr, setAddr] = useState(userAddress[0].address);
  const paymentMethod = [
    { id: 1, image: voucher_img, name: "Momo" },
    { id: 2, image: voucher_img, name: "PayPal" },
    { id: 3, image: voucher_img, name: "COD" },
  ];

  const sum = () => {
    var sum = 0;
    for (var i = 0; i < cartProduct.length; i++) {
      sum += cartProduct[i].price * cartProduct[i].quantity;
    }
    return sum;
  };

  return (
    <div className="payment-container">
      <div className="payment-content">
        <div className="user-address">
          <p>Địa chỉ: {currAddr}</p>
          <button type="button" onClick={() => setOpenAddr(!openAddr)}>
            Thay đổi
          </button>
          {openAddr &&
            userAddress.map((addr) => (
              <div className="address">
                <input
                  type="radio"
                  name="address"
                  onClick={() => {
                    setAddr(addr.address);
                    setOpenAddr(false);
                  }}
                ></input>
                <p>{addr.address}</p>
              </div>
            ))}
        </div>

        <div className="user-payment-method">
          <p>Chọn phương thức thanh toán</p>
          {paymentMethod.map((x) => (
            <div className="payment-method">
              <input type="radio" name="payment-method-radio"></input>
              <img src={x.image} alt={x.name}></img>
              <p>{x.name}</p>
            </div>
          ))}
        </div>

        <div className="user-payment-voucher">
          <p>Chọn voucher:</p>
          <button
            className="browse-voucher-button"
            type="button"
            onClick={() => setOpen(true)}
          >
            Browse voucher
          </button>

          {openVoucher && (
            <div className="voucher-popup-container">
              <div className="voucher-popup-content">
                <button className="close-button" onClick={() => setOpen(false)}>
                  X
                </button>
                <div className="voucher-content">
                  <h2>Giảm giá ship</h2>
                  {testVoucher.map((voucher) => {
                    if (voucher.type === 1) {
                      return (
                        <div className="voucher">
                          <img src={voucher.image} alt="Voucher icon"></img>
                          <div className="voucher-detail">
                            <p>{voucher.name}</p>
                            <p>Phần trăm giảm: {voucher.percentage}</p>
                          </div>
                          <input
                            type="radio"
                            name={"voucher-" + voucher.type}
                          ></input>
                        </div>
                      );
                    } else return null;
                  })}
                  <h2>Giảm giá mặt hàng</h2>
                  {testVoucher.map((voucher) => {
                    if (voucher.type === 2) {
                      return (
                        <div className="voucher">
                          <img src={voucher.image} alt="Voucher icon"></img>
                          <div className="voucher-detail">
                            <p>{voucher.name}</p>
                            <p>Phần trăm giảm: {voucher.percentage}</p>
                          </div>
                          <input
                            type="radio"
                            name={"voucher-" + voucher.type}
                          ></input>
                        </div>
                      );
                    } else return null;
                  })}
                  <button className="select-button">Chọn</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="user-payment-note">
          <p>Ghi chú cho cửa hàng</p>
          <textarea className="note-text-area" name="note-for-shop"></textarea>
        </div>

        <div className="user-payment-cart">
          {cartProduct.map((p) => (
            <div className="cart-detail">
              <img src={p.img} alt="book"></img>
              <div className="cart-item-description">
                <p>{p.book}</p>
                <p>Giá: {p.price + " vnd"}</p>
                <p>Số lượng: {p.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="total-order">
          <h3>Tổng đơn hàng: {sum() + ",000 VND"}</h3>
        </div>

        <div className="payment-buttons">
          <button className="confirm-button">Xác nhận mua</button>
          <button className="cancel-button">Hủy</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
