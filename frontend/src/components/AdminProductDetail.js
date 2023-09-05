import React from "react";

function AdminProductDetail({ id, setOpen }) {
  const addTag = [
    "Danh mục",
    "Tên sách",
    "Tác giả",
    "NXB",
    "Năm XB",
    "Trọng lượng",
    "Số trang",
    "Hình thức",
    "Số lượng",
    "Giảm giá",
    "Giá trước giảm",
    "Giá sau giảm",
    "Ảnh",
  ];
  return (
    <div className="product-detail-container">
      <div className="product-detail-content">
        <button
          className="close-detail"
          type="button"
          onClick={() => setOpen(false)}
        >
          X
        </button>
        <div className="detail-product">
          {addTag.map((product) => (
            <div className="detail">
              <p>{product}:</p>
              <p>{id}</p>
            </div>
          ))}
        </div>
        <div className="buttons">
          <button className="update-button" type="button">
            Chỉnh sửa
          </button>
          <button className="cancel-button" type="button">
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProductDetail;
