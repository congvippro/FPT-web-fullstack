import "./NewsInHomePage.css";
import FPTbuilding from "../../../../asset/fpt-tower.jpg";
function NewsInHomePage() {
  return (
    <>
      <div className="tin-tuc">
        <div className="tin-tuc-title">Tin tức</div>
        {/* tin tức 1 */}
        <div className="tin-tuc-item">
          <img className="img-news" src={FPTbuilding} alt="loading..."></img>
          <div>
            <a
              href="https://fpt.com.vn/vi/tin-tuc/thong-cao-bao-chi/quy-1-doanh-thu-va-loi-nhuan-cua-fpt-tiep-tuc-tang-truong-cao"
              className="tin-tuc-link"
            >
              Quý 1, doanh thu và lợi nhuận FPT tăng trưởng 20,1% và 19,2%
            </a>
            <p className="tin-tuc-summary">
              3 tháng đầu năm 2023, FPT ghi nhận doanh thu 11.681 tỷ đồng, lợi
              nhuận trước thuế 2.121 tỷ đồng, lần lượt tăng 20,1% và 19,2% so
              với cùng kỳ năm ngoái. EPS (Earning Per Share) đạt 1.361 đồng/cổ
              phiếu, tăng trưởng 19,8% so với năm trước.{" "}
            </p>
          </div>
        </div>
        {/* tin tức 2 */}
        <div className="tin-tuc-item">
          <img
            className="img-news"
            src="https://i1-vnexpress.vnecdn.net/2023/04/21/image001-5757-1682080286.png?w=1020&h=0&q=100&dpr=1&fit=crop&s=OPfVOc4whLNOOmj69a83ww"
            alt="loading..."
          ></img>
          <div>
            <a
              href="https://fpt.com.vn/vi/tin-tuc/tin-fpt/tap-doan-fpt-va-dai-hoc-ton-duc-thang-hop-tac-dao-tao-nguon-nhan-luc-chat-luong-cao"
              className="tin-tuc-link"
            >
              FPT VÀ ĐẠI HỌC TÔN ĐỨC THẮNG HỢP TÁC ĐÀO TẠO NGUỒN NHÂN LỰC CHẤT
              LƯỢNG CAO
            </a>
            <p className="tin-tuc-summary">
              Vừa qua tại thành phố Hồ Chí Minh, Tập đoàn FPT đã ký kết hợp tác
              với Đại học Tôn Đức Thắng, cùng nhau phát triển trong lĩnh vực đào
              tạo, khoa học và công nghệ. Theo đó, FPT sẽ tạo điều kiện để sinh
              viên, giảng viên ĐH Tôn Đức Thắng thực tập, nghiên cứu tại các cơ
              sở, công ty thành viên trực thuộc FPT, đồng thời hỗ trợ học bổng
              cho các chương trình đào tạo đại học và sau đại học của nhà
              trường.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsInHomePage;
