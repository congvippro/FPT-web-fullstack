import React, { useState } from "react";
import "./Navigate.css";

const Navigate = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <>
      <div className="topnav">
        <a
          href="/docs-admin"
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          Quản lý tài liệu
        </a>
        <a
          href="/news-admin"
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          Quản lý thông báo
        </a>
        <a
          href="/schedule-admin"
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleClick(2)}
        >
          Quản lý lịch phòng họp
        </a>
        <a
          href="/account-manage"
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleClick(4)}
        >
          Quản lý tài khoản
        </a>
        <a
          href="/home"
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleClick(5)}
        >
          Trang chủ nhân viên
        </a>
        <a
          href="/"
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleClick(6)}
        >
          Logout
        </a>
      </div>
    </>
  );
};

export default Navigate;
