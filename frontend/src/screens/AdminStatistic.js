import React from "react";
import "../scss/admin.scss";
import AdminNavbar from "../components/AdminNavbar";
import BarChart from "../components/BarChart";

function AdminStatistic() {
  var tOrder = 10;
  var tRevenue = "10.000.000 VND";
  return (
    <div className="statistic-container">
      <AdminNavbar />
      <div className="statistic-content">
        <div className="success-order">
          <p className="header">Tổng số đơn hàng thành công</p>
          <p className="data">{tOrder}</p>
        </div>
        <div className="success-order-by-day">
          <p className="header">Tổng số đơn hàng thành công theo ngày</p>
          <BarChart props={"Chart"} />
        </div>
        <div className="success-order-by-payment-method">
          <p className="header">
            Tổng số đơn hàng thành công theo phương thức thanh toán
          </p>
          <BarChart props={"Chart"} />
        </div>
        <div className="revenue">
          <p className="header">Tổng số doanh thu</p>
          <p className="data">{tRevenue}</p>
        </div>
        <div className="revenue-by-day">
          <p className="header">Tổng số doanh thu theo ngày</p>
          <BarChart props={"Chart"} />
        </div>
      </div>
    </div>
  );
}

export default AdminStatistic;
