import React from "react";
import "./BieuMau.css";

function BieuMau() {
  return (
    <>
      <div className="bieu-mau">
        <ul className="document-list">
          <li>
            <span className="document-link">
              <a className="a-bieumau" href="#">
                Tài liệu 1
              </a>
            </span>
            <span className="document-date">Ngày đăng: 01/01/2022</span>
            <span className="document-author">Người đăng: Lê Trần Anh Quí</span>
            <span className="document-download">
              <a className="a-bieumau" href="#">
                Download
              </a>
            </span>
          </li>
          <li>
            <span className="document-link">
              <a className="a-bieumau" href="#">
                Tài liệu 2
              </a>
            </span>
            <span className="document-date">Ngày đăng: 02/01/2022</span>
            <span className="document-author">Người đăng: Trần Lê Tứ</span>
            <span className="document-download">
              <a className="a-bieumau" href="#">
                Download
              </a>
            </span>
          </li>
          <li>
            <span className="document-link">
              <a className="a-bieumau" href="#">
                Tài liệu 3
              </a>
            </span>
            <span className="document-date">Ngày đăng: 03/01/2022</span>
            <span className="document-author">Người đăng: Lê Trần Anh Quí</span>
            <span className="document-download">
              <a className="a-bieumau" href="#">
                Download
              </a>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default BieuMau;
