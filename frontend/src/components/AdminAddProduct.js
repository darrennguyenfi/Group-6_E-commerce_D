import React, { useEffect, useState } from "react";
import "../scss/admin.scss";

function AdminAddProduct({ setOpen }) {
  const [imageFile, setFile] = useState([]);
  const [cateOpen, setCategory] = useState(false);
  const [authorOpen, setAuthor] = useState(false);
  const [cPlaceholder, setCPlaceHolder] = useState("Chọn danh mục");
  const [aPlaceholder, setAPlaceholder] = useState("Chọn tác giả");

  const browseImg = (event) => {
    if (event.target.files.length !== 0) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  const cateList = ["A", "B", "C"];
  const authorList = ["D", "E", "F"];
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
    <div className="product-add-container">
      <div className="product-add-content">
        <button
          className="close-add"
          type="button"
          onClick={() => setOpen(false)}
        >
          X
        </button>
        <div className="add-product">
          {addTag.map((tag, index) => {
            if (addTag[index] === "Danh mục") {
              return (
                <div className="product-input">
                  <p>{tag}</p>
                  <div className="product-input-info">
                    <div className="info-input">
                      <input placeholder={cPlaceholder} disabled></input>
                      <button
                        className="cate-activate-button"
                        type="button"
                        onClick={() => setCategory(!cateOpen)}
                      >
                        V
                      </button>
                    </div>
                    {cateOpen === true && (
                      <div className="category-dropdown">
                        {cateList.map((category) => (
                          <button
                            className="category"
                            type="button"
                            onClick={() => {
                              setCPlaceHolder(category);
                              setCategory(false);
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
            } else if (addTag[index] === "Tác giả") {
              return (
                <div className="product-input">
                  <p>{tag}</p>
                  <div className="product-input-info">
                    <div className="info-input">
                      <input placeholder={aPlaceholder} disabled></input>
                      <button
                        className="author-activate-button"
                        type="button"
                        onClick={() => setAuthor(!authorOpen)}
                      >
                        V
                      </button>
                    </div>
                    {authorOpen === true && (
                      <div className="category-dropdown">
                        {authorList.map((author) => (
                          <button
                            className="author"
                            type="button"
                            onClick={() => {
                              setAPlaceholder(author);
                              setAuthor(false);
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
            } else if (addTag[index] === "Ảnh") {
              return (
                <div className="product-image">
                  <div className="product-image-widget">
                    <p>{tag}</p>
                    <input type="file" onChange={browseImg} accept="image/*" />
                    <div className="image-box">
                      <img className="image" src={imageFile}></img>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="product-input">
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

export default AdminAddProduct;
