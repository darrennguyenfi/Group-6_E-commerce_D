import React from "react";
import "../scss/user.scss";

function UserPasswordChange() {
  return (
    <div className="password-change-container">
      <button className="back-button" type="button">
        &lt; Back
      </button>
      <div className="password-change-content">
        <h2 className="password-change-header">Thay đổi mật khẩu</h2>
        <h3>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </h3>
        <div className="password-change">
          <div className="old-pass">
            <p>Mật khẩu cũ:</p>
            <input className="old-pass-input"></input>
          </div>
          <div className="new-pass">
            <p>Mật khẩu mới:</p>
            <input className="new-pass-input"></input>
          </div>
          <div className="reconfirm-pass">
            <p>Nhập lại mật khẩu mới:</p>
            <input className="reconfirm-pass-input"></input>
          </div>
        </div>
        <button className="save-pass-button" type="button">
          Lưu
        </button>
      </div>
    </div>
  );
}

export default UserPasswordChange;
