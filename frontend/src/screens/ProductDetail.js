import React from "react";
import "../scss/productdetail.scss";
import book from "../assets/SGK.jpg";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const handleGoBack = () => {
  window.history.back();
};

const productGeneralInfo = ["Sach A", "Van hoc", "5", "25000"];

const productDetail = [
  "Kim Dong",
  "Viet Nam",
  "Tieng Viet",
  "Kim Dong",
  "2022",
  "100",
];

const productDetailTag = [
  "Thuong hieu:",
  "Nhap khau:",
  "Ngon ngu:",
  "Nha phat hanh:",
  "Nam xuat ban:",
  "Ton kho:",
];

const similarProduct = [
  {
    img: book,
    book: "Sách giáo khoa",
    price: "30.000 vnd",
    vote: "5.0",
  },
  {
    img: book,
    book: "Sách giáo khoa toán",
    price: "30.000 vnd",
    vote: "5.0",
  },
  {
    img: book,
    book: "Sách",
    price: "30.000 vnd",
    vote: "5.0",
  },
  {
    img: book,
    book: "Sách giáo khoa toán",
    price: "30.000 vnd",
    vote: "5.0",
  },
];

function ProductDetail() {
  return (
    <>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-detail">
          <div className="product-general-detail">
            <img src={book} alt={productGeneralInfo[0]} />
            <div className="product-general-info">
              <h3>{productGeneralInfo[0]}</h3>
              <p>The loai: {productGeneralInfo[1]}</p>
              <p>Danh gia: {productGeneralInfo[2]}/5</p>
              <p>Gia: {productGeneralInfo[3]}</p>
              <div className="product-order-button">
                <form>
                  <button className="add-to-cart-button">
                    Them vao gio hang
                  </button>
                </form>
                <form>
                  <button className="buy-now-button">Mua ngay</button>
                </form>
              </div>
            </div>
          </div>

          <div className="product-detail-info">
            <h2>Thong tin san pham</h2>
            {productDetailTag.map((x, index) => (
              <p>
                {x} {productDetail[index]}
              </p>
            ))}
          </div>
          <button className="product-backBtn" onClick={handleGoBack}>
            Go Back
          </button>
        </div>

        <div className="similar-product-container">
          <h1>San pham tuong tu</h1>
          <div className="similar-product-list">
            {similarProduct.map((sProduct) => (
              <div className="similar-product">
                <img src={sProduct.img} alt={sProduct.book} />
                <p>{sProduct.book}</p>
                <p>{sProduct.price} VND</p>
                <p>{sProduct.vote}/5</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
