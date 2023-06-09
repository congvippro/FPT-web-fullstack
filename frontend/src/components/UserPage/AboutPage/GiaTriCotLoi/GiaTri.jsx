import React from "react";
import NewNav from "../../NewNav/NewNav";
import Footer from "../../Footer/Footer";
import "./GiaTri.css";
function GiaTri() {
  return (
    <>
      <NewNav />
      <div className="GiaTriCotLoi-page">
        <h1 className="h1-center">Giá trị cốt lõi</h1>
        <div className="container">
          <div className="left">
            <div className="values-element">
              <h2>01. Tôn trọng</h2>
              <p>
                + Không phân biệt vị trí cao thấp, quan hệ thân sơ.
                <br />
                + Chấp nhận mọi người như họ vốn có.
                <br /> + Tạo điều kiện tối đa để các thành viên được là chính
                mình.
              </p>
            </div>
            <div className="values-element">
              <h2>02. Đổi mới</h2>
              <p>
                + Không ngừng học hỏi.
                <br />+ Nỗ lực dẫn đầu công nghệ mới, sản phẩm mới.
                <br />+ Tiếp thu các phương thức quản trị/kinh doanh mới.
              </p>
            </div>
            <div className="values-element">
              <h2>03. Đồng đội</h2>
              <p>
                + Đồng tâm, Tập thể và Chân tình. <br />+ Chung một mục tiêu
                chung "vì sự thành công của khách hàng và sự phát triển trường
                tồn của công ty".
              </p>
            </div>
          </div>
          <div className="middle">
            <img
              src="https://congngheviet.com/wp-content/uploads/2023/04/Chu-tich-FPT-Telecom-05.webp"
              alt="Giá trị cốt lõi"
              width="400"
              className="img-right"
            />
            <div></div>
            <img
              src="https://foxnews.fpt.vn/wp-content/uploads/2022/09/yie1.jpeg"
              alt="Giá trị cốt lõi"
              width="400"
              className="img-left"
            />
            <img
              src="https://znews-photo.zingcdn.me/w660/Uploaded/wyhktpu/2022_11_07/3_3.jpg"
              alt="Giá trị cốt lõi"
              width="400"
              className="img-right"
            />
          </div>
          <div className="right">
            <div className="values-element">
              <h2>04. Chí công</h2>
              <p>
                Nền tảng quan trọng nhất để lãnh đạo xây dựng niềm tin trong
                nhân viên.
              </p>
            </div>
            <div className="values-element">
              <h2>05. Gương mẫu</h2>
              <p>
                Lãnh đạo phải là người thể hiện rõ nét nhất về Tinh thần FPT.
              </p>
            </div>
            <div className="values-element">
              <h2>06. Sáng suốt</h2>
              <p>Tầm nhìn xa và tính quyết đoán.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default GiaTri;
