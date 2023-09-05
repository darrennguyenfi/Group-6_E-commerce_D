import React from "react";
import "../scss/user.scss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function UserInfo() {
  return (
    <>
      <Navbar />

      <div className="user-info-container">
        <div className="user-info-sidebar">
          <button type="button">Đơn hàng</button>
          <button type="button">Kho voucher</button>
          <button type="button">Điểm tích lũy</button>
          <button type="button">Sửa mật khẩu</button>
        </div>
        <div className="info-container">
          <h2>Hồ sơ của tôi</h2>
          <h3>Quản lí thông tin hồ sơ để bảo mật tài khoản</h3>
          <div className="user-info">
            <div className="user-personal-info">
              <p>Tài khoản:</p>
              <p>Tên:</p>
              <p>Email:</p>
              <p>Số điện thoại:</p>
              <p>Địa chỉ:</p>
            </div>
            <div className="user-personal-info-data">
              <p>User5763</p>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
              <input type="text"></input>
            </div>
          </div>
          <button className="save-info" type="button">
            Lưu
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserInfo;
