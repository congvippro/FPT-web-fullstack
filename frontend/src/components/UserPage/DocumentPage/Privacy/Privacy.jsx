import React from "react";

function Privacy() {
  return (
    <>
      <div className="bieu-mau">
        <ul className="document-list">
          <li>
            <span className="document-link">Quy định tăng lương</span>
            <span className="document-date">Ngày đăng: 01/01/2022</span>
            <span className="document-author">
              Người đăng: Nguyễn Viết Công
            </span>
            <span className="document-download">
              <a className="a-bieumau" href="#">
                Download
              </a>
            </span>
          </li>
          <li>
            <span className="document-link">Chính sách bảo mật công ty</span>
            <span className="document-date">Ngày đăng: 02/01/2022</span>
            <span className="document-author">
              Người đăng: Nguyễn Viết Công
            </span>
            <span className="document-download">
              <a className="a-bieumau" href="#">
                Download
              </a>
            </span>
          </li>
          <li>
            <span className="document-link">
              Quy định nghỉ lễ, nghỉ sinh con
            </span>
            <span className="document-date">Ngày đăng: 03/01/2022</span>
            <span className="document-author">
              Người đăng: Nguyễn Viết Công
            </span>
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

export default Privacy;
