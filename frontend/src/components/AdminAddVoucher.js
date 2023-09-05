import React, { useState } from "react";
import "../scss/admin.scss";

function AdminAddVoucher({ setOpen }) {
  const [vTypeOpen, setVType] = useState(false);
  const [conOpen, setCondition] = useState(false);
  const [vPlaceholder, setVPlaceHolder] = useState("Chọn danh mục");
  const [cPlaceHolder, setCPlaceHolder] = useState("Chọn tác giả");

  const voucherTypeList = ["A", "B", "C"];
  const condition = ["D", "E", "F"];
  const addTag = ["Loại voucher", "Tên voucher", "% giảm", "Điều kiện"];

  return (
    <div className="voucher-add-container">
      <div className="voucher-add-content">
        <button
          className="close-add"
          type="button"
          onClick={() => setOpen(false)}
        >
          X
        </button>
        <div className="add-voucher">
          {addTag.map((tag, index) => {
            if (addTag[index] === "Loại voucher") {
              return (
                <div className="voucher-input">
                  <p>{tag}</p>
                  <div className="voucher-input-info">
                    <div className="info-input">
                      <input placeholder={vPlaceholder} disabled></input>
                      <button
                        className="cate-activate-button"
                        type="button"
                        onClick={() => setVType(!vTypeOpen)}
                      >
                        V
                      </button>
                    </div>
                    {vTypeOpen === true && (
                      <div className="category-dropdown">
                        {voucherTypeList.map((category) => (
                          <button
                            className="category"
                            type="button"
                            onClick={() => {
                              setVPlaceHolder(category);
                              setVType(false);
                            }}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            } else if (addTag[index] === "Điều kiện") {
              return (
                <div className="voucher-input">
                  <p>{tag}</p>
                  <div className="voucher-input-info">
                    <div className="info-input">
                      <input placeholder={cPlaceHolder} disabled></input>
                      <button
                        className="author-activate-button"
                        type="button"
                        onClick={() => setCondition(!conOpen)}
                      >
                        V
                      </button>
                    </div>
                    {conOpen === true && (
                      <div className="category-dropdown">
                        {condition.map((author) => (
                          <button
                            className="author"
                            type="button"
                            onClick={() => {
                              setCPlaceHolder(author);
                              setCondition(false);
                            }}
                          >
                            {author}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="voucher-input">
                  <p>{tag}</p>
                  <div className="info-input">
                    <input></input>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="buttons">
          <button className="add-button" type="button">
            Thêm
          </button>
          <button className="cancel-button" type="button">
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminAddVoucher;
