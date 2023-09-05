import React, { useState } from "react";
import voucher_img from "../assets/voucher-icon.png";
import "../scss/admin.scss";
import AdminNavbar from "../components/AdminNavbar";
import AdminAddVoucher from "../components/AdminAddVoucher";

const testVoucher = [
  {
    id: 1,
    name: "Free ship",
    percentage: 100,
    image: voucher_img,
    type: 0,
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
    type: 0,
  },
];

function AdminVoucherManagement() {
  const [addVoucher, setAdd] = useState(false);
  return (
    <div className="voucher-management-container">
      <div className="voucher-search">
        <form>
          <input className="search-bar" placeholder="Tên voucher"></input>
          <button type="button">Tìm kiếm</button>
        </form>
      </div>
      <AdminNavbar />
      <div className="voucher-table">
        {testVoucher.map((voucher) => (
          <div className="voucher">
            <img src={voucher.image} alt="Voucher icon"></img>
            <div className="voucher-detail">
              <p>{voucher.name}</p>
              <p>Phần trăm giảm: {voucher.percentage}</p>
            </div>
            <button className="delete-button" type="button">
              Xóa
            </button>
          </div>
        ))}
      </div>
      <div className="voucher-management-buttons">
        <button type="button" onClick={() => setAdd(!addVoucher)}>
          Thêm voucher
        </button>
        <button type="button">Chỉnh sửa</button>
      </div>
      {addVoucher && <AdminAddVoucher setOpen={setAdd} />}
    </div>
  );
}

export default AdminVoucherManagement;
