import React, { useState } from "react";
import "./NewNav.css";

function NotificationBox(props) {
  return (
    <div className="notification-box">
      <div className="notification-header">Thông báo mới</div>
      <div className="notification-content">Bạn chưa có thông báo mới</div>
      <button className="notification-close" onClick={props.onClose}>
        Đóng
      </button>
    </div>
  );
}

function MessageBox(props) {
  return (
    <div className="message-box">
      <div className="message-header">Tin nhắn</div>
      <div className="message-content">Bạn chưa có tin nhắn</div>
      <button className="message-close" onClick={props.onClose}>
        Đóng
      </button>
    </div>
  );
}

function NewNav() {
  const [showNotification, setShowNotification] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const handleNotificationClick = () => {
    setShowNotification(true);
    setShowMessage(false);
  };

  const handleMessageClick = () => {
    setShowMessage(true);
    setShowNotification(false);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };
  return (
    <>
      <nav>
        <ul className="menu">
          <li className="nav-li" onClick="toggleSubmenu(this)">
            <a id="a-nav" href="/home">
              Home
            </a>
          </li>
          <li className="nav-li" onClick="toggleSubmenu(this)">
            <a id="a-nav" href="/schedule">
              Lịch họp
            </a>
          </li>

          <li className="nav-li" onClick="toggleSubmenu(this)">
            <a id="a-nav" href="/document">
              Tài liệu
            </a>
          </li>

          <li className="nav-li" onClick="toggleSubmenu(this)">
            <a id="a-nav" href="/about">
              Giới thiệu
            </a>
            <ul className="submenu">
              <li>
                <a id="a-nav" href="/about">
                  Liên hệ
                </a>
              </li>
              <li>
                <a id="a-nav" href="/Gia-Tri-Cot-Loi">
                  Giá trị cốt lõi
                </a>
              </li>
            </ul>
          </li>

          <li>
            <a id="a-nav" href="/ThongTinNhanVien">
              Thông tin nhân viên
            </a>
          </li>

          <li>
            <a id="a-nav" href="/">
              Logout
            </a>
          </li>
        </ul>
        <div className="right-icons">
          <i className="fa fa-envelope" onClick={handleMessageClick}></i>
          <i className="fa fa-bell" onClick={handleNotificationClick}></i>
        </div>

        <div class="notification-banner">
          <span>
            <i className="fas fa-gift"></i> Chúc mừng sinh nhật{" "}
            <i class="fas fa-birthday-cake"></i> Lê Trần Anh Quí{" "}
          </span>
        </div>
      </nav>{" "}
      {showNotification && (
        <NotificationBox onClose={handleCloseNotification} />
      )}
      {showMessage && <MessageBox onClose={handleCloseMessage} />}
    </>
  );
}

export default NewNav;
