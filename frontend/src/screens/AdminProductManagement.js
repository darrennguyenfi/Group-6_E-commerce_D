import React, { useState } from "react";
import AdminNavbar from "../components/AdminNavbar";
import book from "../assets/SGK.jpg";
import "../scss/admin.scss";
import AdminAddProduct from "../components/AdminAddProduct";
import AdminProductDetail from "../components/AdminProductDetail";

const productList = [
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

function AdminProductManagement() {
  const [selectedProduct, setSelected] = useState(-1);
  const [showProduct, setOpenProduct] = useState(false);
  const [openProduct, setOpen] = useState(false);
  return (
    <>
      <div className="product-management-container">
        <div className="product-search">
          <form>
            <input type="text" placeholder="Tên sản phẩm"></input>
            <button type="button">Tìm kiếm</button>
          </form>
        </div>
        <AdminNavbar />
        <div className="product-add-button">
          <button
            className="add-button"
            type="button"
            onClick={() => setOpen(true)}
          >
            + Thêm sản phẩm
          </button>
        </div>

        <div className="product-info">
          {productList.map((product) => (
            <div className="product-data">
              <img src={product.img} alt={product.book}></img>
              <div className="product-description">
                <p>Mã sản phẩm: {product.id}</p>
                <p>Tên sản phẩm: {product.book}</p>
                <p>Giá hiện tại: {product.price}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpenProduct(true);
                  setSelected(product.id);
                }}
              >
                Chi tiết
              </button>
            </div>
          ))}
        </div>
      </div>
      {openProduct === true && <AdminAddProduct setOpen={setOpen} />}
      {showProduct === true && (
        <AdminProductDetail id={selectedProduct} setOpen={setOpenProduct} />
      )}
    </>
  );
}

export default AdminProductManagement;
