import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Liên hệ</h3>
            <p>
              <strong>Địa chỉ:</strong> Tòa nhà FPT Tân Thuận , Lô L29B-31B-33B,
              đường số 8, KCX Tân Thuận, phường Tân Thuận Đông, quận 7, Thành
              phố Hồ Chí Minh, Việt Nam.
            </p>
            <p>
              <strong>Số điện thoại:</strong> +84 24 7300 7300
            </p>
            <p>
              <strong>Fax:</strong> +84 24 37687410
            </p>
            <p>
              <strong>Email:</strong> fptnews@fpt.com.vn
            </p>
          </div>
          <div className="col-md-6">
            <h3>Mạng xã hội</h3>
            <ul className="social-links">
              <li>
                <a
                  className="icon-social-network"
                  href="https://www.facebook.com/fptcorp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="icon-social-network"
                  href="https://www.linkedin.com/company/fpt-corporation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="icon-social-network"
                  href="https://www.youtube.com/c/FPTCorporation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                  Youtube
                </a>
              </li>
              <li>
                <a
                  className="icon-social-network"
                  href="
                  https://www.tiktok.com/@fptchungta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-tiktok"></i>
                  Tiktok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-right">
          © Công ty TNHH Đầu tư FPT 2023. Tất cả các quyền được bảo lưu.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
