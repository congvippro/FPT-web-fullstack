import React, { useState, useEffect } from "react";
import "./TaiLieuChuyenMon.css";

import Axios from "axios";

function TaiLieuChuyenMon() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [DocsList, setDocsList] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/DocsGet").then((response) => {
      setDocsList(response.data);
    });
  });
  return (
    <div className="DocsListManageUser">
      <div className="DocsHeaderUser">
        <span className="column-order">Số thứ tự</span>
        <span className="column-title">Tiêu đề</span>
        <span className="column-content">Nội dung tài liệu</span>
        <span className="column-date">Ngày gửi</span>
        <span className="column-date">Download</span>
      </div>
      <ol className="DocsElementsWrapperUser" style={{ padding: 0 }}>
        {DocsList.map((val, index) => (
          <li key={val.id} className="DocsElementViewUser">
            <span className="column-order">{index + 1}</span>
            <span className="column-title">{val.Title}</span>
            <span className="column-content">{val.Content}</span>
            <span className="column-date">{val.Date}</span>
            <span className="column-date">
              <a href="#drive">Download</a>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TaiLieuChuyenMon;
