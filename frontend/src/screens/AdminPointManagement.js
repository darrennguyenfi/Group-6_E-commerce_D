import React, { useState } from "react";
import "../scss/admin.scss";

const customerList = [
  {
    id: 1,
    name: "asdasdasdAasdas",
    rank: "gold",
    coin: 100,
    status: 2,
  },
  {
    id: 1,
    name: "asdasdasdAasdas",
    rank: "gold",
    coin: 100,
    status: 2,
  },
  {
    id: 1,
    name: "asdasdasdAasdas",
    rank: "gold",
    coin: 300,
    status: 1,
  },
  {
    id: 2,
    name: "A",
    rank: "silver",
    coin: 1000,
    status: -1,
  },
  {
    id: 3,
    name: "S",
    rank: "gold",
    coin: 100,
    status: 2,
  },
  {
    id: 4,
    name: "K",
    rank: "gold",
    coin: 500,
    status: -1,
  },
  {
    id: 5,
    name: "B",
    rank: "bronze",
    coin: 200,
    status: 1,
  },
];

function AdminPointManagement() {
  const [currCategory, setCategory] = useState(0);
  const pointCategory = ["Tất cả", "Đã nhận", "Đã dùng", "Đã tích"];
  const pCategory = [0, 1, -1, 2];
  const header = ["Tên khách hàng", "Tình trạng coin", "Số coin"];

  const setFocus = (e) => {
    console.log(e.target.className);
    if (e.relatedTarget === null) {
      e.target.focus();
    }
  };

  const cStatus = (num) => {
    if (num === 1) {
      return "Đã nhận";
    } else if (num === 2) {
      return "Đã tích";
    } else if (num === -1) {
      return "Đã dùng";
    } else {
      return "error";
    }
  };

  return (
    <div className="point-management-container">
      <button className="back-button">&lt; Back</button>
      <div className="point-management-content">
        <div className="point-category">
          {pointCategory.map((category, index) => (
            <button
              className="category-btn"
              type="button"
              onClick={() => setCategory(pCategory[index])}
              onBlur={(e) => {
                setFocus(e);
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="customer-search">
          <input type="text" placeholder="Tên khách hàng"></input>
          <button type="button">Tìm kiếm</button>
        </div>

        <div className="point-table">
          <div className="customer-name">
            <p className="header">{header[0]}</p>
            {customerList.map((c) => {
              if (currCategory === 0 || c.status === currCategory) {
                return <p className="data">{c.name}</p>;
              } else return null;
            })}
          </div>
          <div className="coin-status">
            <p className="header">{header[1]}</p>
            {customerList.map((c) => {
              if (currCategory === 0 || c.status === currCategory) {
                return <p className="data">{cStatus(c.status)}</p>;
              } else return null;
            })}
          </div>
          <div className="customer-coin">
            <p className="header">{header[2]}</p>
            {customerList.map((c) => {
              if (currCategory === 0 || c.status === currCategory) {
                return <p className="data">{c.coin}</p>;
              } else return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPointManagement;
