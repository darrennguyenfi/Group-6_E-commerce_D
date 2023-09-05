import React, { useEffect, useState } from "react";
import "../scss/components.scss";
import CategoryPopUp from "./CategoryPopup";
import axios from "axios";

const client = axios.create({
  baseURL: "http://127.0.0.1:3001/",
});

let categoriesList = [];

function Navbar() {
  const [btnCategory, setBtnCategory] = useState(false);
  const [selectedSub, setSub] = useState(0);
  const [openUserItem, setUserItem] = useState(false);
  const handleUserHover = () => setUserItem(!openUserItem);
  const userItem = [
    "Thông tin cá nhân",
    "Theo dõi đơn hàng",
    "Lịch sử mua hàng",
    "Đăng xuất",
  ];

  //Test data\\
  let name = "Mike";
  useEffect(() => {
    const temp = client.get("api/category").then((res) => {
      console.log(res);
      if (res.data.status === "success") {
        categoriesList = res.data.categories;
        console.log(categoriesList);
      }
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a className="navbar-logo" href="/">
            <img
              style={{ marginRight: " 10px" }}
              src={require("../assets/logo.png")}
              alt="Logo"
            />
            Hachiko
          </a>
        </div>

        <form className="navbar-search">
          <button
            className="navbar-search-category"
            type="button"
            onClick={() => {
              setBtnCategory(true);
            }}
          >
            Category
          </button>
          <input></input>
          <button className="navbar-search-button" type="submit">
            <img src={require("../assets/search.png")} alt="Search" />
          </button>
        </form>

        <div className="navbar-item">
          <a className="navbar-cart" href="/">
            <img src={require("../assets/cart.png")} alt="Cart" />
          </a>
          <div className="navbar-user">
            <a
              className="navbar-user-name"
              href="/"
              onMouseOver={handleUserHover}
            >
              {name}
            </a>
            {openUserItem && (
              <ul className="navbar-user-items-dropdown">
                {userItem.map((item, index) => (
                  <li>
                    <a key={index} href="/">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <img src={require("../assets/user.png")} alt="UserIcon" />
          </div>
        </div>
      </div>

      <CategoryPopUp trigger={btnCategory} setTrigger={setBtnCategory}>
        {categoriesList.map((category) => (
          <div className="category">
            <a href="/">{category.categoryName}</a>
            <div className="sub-category-container">
              {category.children.map((subCate) => (
                <div className="sub-category">
                  <a
                    className="sub-category-name"
                    href="/"
                    onMouseOver={() => {
                      setSub(subCate.id);
                      console.log(subCate.id);
                    }}
                  >
                    {subCate.categoryName}
                  </a>
                  <div className="sub-sub-category-container">
                    {subCate.id === selectedSub &&
                      subCate.children.map((subSubCate) => (
                        <div className="sub-sub-category">
                          <a className="sub-sub-category-name" href="/">
                            {subSubCate.categoryName}
                          </a>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </CategoryPopUp>
    </nav>
  );
}

export default Navbar;
