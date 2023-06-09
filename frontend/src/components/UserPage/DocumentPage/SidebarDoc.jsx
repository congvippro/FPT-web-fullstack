import React from "react";
import "./SidebarDoc.css";

function Sidebar(props) {
  return (
    <div className="sidebar-doc">
      <ul>
        <li onClick={() => props.handlePageChange("privacy")}>Chính sách</li>
        <li onClick={() => props.handlePageChange("bieumau")}>Biểu mẫu</li>
        <li onClick={() => props.handlePageChange("tailieuchuyenmon")}>
          Tài liệu chuyên môn
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
