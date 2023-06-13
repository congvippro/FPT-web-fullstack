import Footer from "../Footer/Footer";
import NewNav from "../NewNav/NewNav";
import "./About.css";

function AboutPage() {
  return (
    <div className="setbackground">
      {/* <Navigate /> */}
      <NewNav />
      <h1 className="h1-center">Các trụ sở</h1>
      <div className="row_f">
        <div className="section-fpt-info-item col-sm-12 col-md-12 col-lg-6 col-xl-6 truso-col1">
          <div className="block-title-content block-margin-mobile highlight">
            <div className="content-child ">
              <p className="title-in-block-border name">Trụ sở chính</p>
              <p className="text-in-block-border address">
                Địa chỉ: Tòa nhà FPT, số 10 phố Phạm Văn Bạch, phường Dịch Vọng,
                quận Cầu Giấy, Hà Nội, Việt Nam .
              </p>
              <div className="text-in-block-border">
                <div>
                  <span className="text">Điện thoại:&nbsp;</span>
                  +84 24 7300 7300
                </div>
                <div>
                  <span className="text">Fax:&nbsp;</span>
                  <span className="number">+84 24 37687410</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-fpt-info-item col-sm-12 col-md-12 col-lg-6 col-xl-6 truso-col2">
          <div className="block-title-content block-margin-left block-margin-mobile">
            <div className="content-child">
              <p className="title-in-block-border name">
                Chi nhánh FPT tại TP. Hồ Chí Minh
              </p>
              <p className="text-in-block-border address">
                Địa chỉ: Tòa nhà FPT Tân Thuận , Lô L29B-31B-33B, đường số 8,
                KCX Tân Thuận, phường Tân Thuận Đông, quận 7, Thành phố Hồ Chí
                Minh, Việt Nam.
              </p>
              <div className="text-in-block-border">
                <div>
                  <span className="text">Điện thoại:&nbsp;</span>
                  <span className="number">+84 24 7300 7300</span>
                </div>
                <div>
                  <span className="text">Fax:&nbsp;</span>
                  <span className="number">+84 24 37687410</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-fpt-info-item col-sm-12 col-md-12 col-lg-6 col-xl-6 truso-col1">
          <div className="block-title-content block-margin-mobile">
            <div className="content-child">
              <p className="title-in-block-border name">
                Văn phòng đại diện FPT tại Đà Nẵng
              </p>
              <p className="text-in-block-border address">
                Địa chỉ: Tòa nhà FPT Complex, Khu đô thị FPT City, Hòa Hải, Ngũ
                Hành Sơn, Thành phố Đà Nẵng, Việt Nam.
              </p>
              <div className="text-in-block-border">
                <div>
                  <span className="text">Điện thoại:&nbsp;</span>
                  <span className="number">+84 0344 1333</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-fpt-info-item col-sm-12 col-md-12 col-lg-6 col-xl-6 truso-col2">
          <div className="block-title-content block-margin-left block-margin-mobile">
            <div className="content-child">
              <p className="title-in-block-border  name">
                Văn phòng đại điện FPT tại Cần Thơ
              </p>
              <p className="text-in-block-border address">
                Địa chỉ: 69 Hùng Vương, phường Thới Bình, quận Ninh Kiều, Thành
                phố Cần Thơ.
              </p>
              <div className="text-in-block-border">
                <div>
                  <span className="text">Điện thoại:&nbsp;</span>
                  <span className="number">+84 07 3752 666</span>
                </div>
                <div>
                  <span className="text">Fax:&nbsp;</span>
                  <span className="number">+84 0710 752 555</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="h1-center">Dịch vụ và giải pháp</h1>
      <div className="col-12">
        <div className="section-service">
          <div className="row">
            <div className="block-content truso-col2">
              <p className="title-in-block-border title-line-1">
                Phát triển phần mềm
              </p>

              <p className="text-in-block-border email">
                Email: support@fptsoftware.com
              </p>
              <p className="text-in-block-border phone-line-1">
                Điện thoại: +84 24 3768 9048
              </p>
            </div>
            <div className="block-content truso-col1">
              <p className="title-in-block-border title-line-1">
                Dịch vụ trực tuyến
                <div></div>
              </p>
              <p className="text-in-block-border email">
                Email: fsoft.contact@fsoft.com.vn
              </p>
              <p className="text-in-block-border phone-line-1">
                Điện thoại: +84 28 7300 9999
              </p>
            </div>

            <div className="block-content truso-col2">
              <p className="title-in-block-border title-line-1">
                Tích hợp Hệ thống, Dịch vụ CNTT
              </p>
              <p className="text-in-block-border email">
                Email: support@fptsoftware.com
              </p>
              <p className="text-in-block-border phone-line-1">
                Điện thoại: +84 24 3768 9048
              </p>
            </div>

            <div className="block-content truso-col1">
              <p className="title-in-block-border title-line-1">
                Dịch vụ Internet, truyền hình
                <div></div>
              </p>
              <p className="text-in-block-border email">
                Email: hotrokhachhang@fpt.com.vn
              </p>
              <p className="text-in-block-border phone-line-1">
                Điện thoại: + 84 24 7300 2222
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
