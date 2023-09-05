import React from 'react'
import '../scss/components.scss'

function AdminNavbar() {
  return (
    <div className='sidebar-nav-container'>
        <div className='sidebar-nav'>
            <button type='button'>Sản phẩm</button>
            <button type='button'>Voucher</button>
            <button type='button'>Thống kê</button>
            <button type='button'>Đơn hàng</button>
            <button type='button'>Khách hàng</button>
        </div>
    </div>
  )
}

export default AdminNavbar