import React, { useEffect, useState } from "react";
import "./ThongTinNhanVien.css";
import NewNav from "../NewNav/NewNav";
import Footer from "../Footer/Footer";
import Axios from "axios";

function ThongTinNhanVien() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [depart, setDepart] = useState("");
  const [id, setId] = useState("");
  const [birthday, setBirthday] = useState("");
  const [employee_info, setEmployee_info] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/EmployeeInfoGet").then((response) => {
      setEmployee_info(response.data);
    });
  }, []);

  const submitEmployeeInfo = () => {
    alert("cập nhật thành công, reload trang để xem");
    Axios.post("http://localhost:3001/api/EmployeeModified", {
      email: email,
      phone: phone,
      address: address,
      id: 1422,
    }).then(() => {
      alert("success insert");
    });
  };

  return (
    <div className="ThongTinNhanVien-page">
      <NewNav />
      <div className="employee-container">
        <div className="employee-info">
          <img
            className="employee-image"
            src="https://media.licdn.com/dms/image/D4E03AQGc0nr0PvY42Q/profile-displayphoto-shrink_800_800/0/1665287089358?e=1691625600&v=beta&t=hLgx8nrf0A3F8mXjOARF4w6txbEmTtzwO-4P_fZyyC0"
            alt="employee avatar"
          />
          {employee_info.map((val) => (
            <div>
              <h3 className="employee-name">Họ và tên: {val.name}</h3>
              <p className="employee-position">Phòng ban: {val.depart}</p>
              <div className="employee-contact">
                <div className="group_modified_employ_info">
                  <p className="employee-email">Email: {val.email}</p>{" "}
                </div>
                <div className="group_modified_employ_info">
                  <p className="employee-phone">Số điện thoại: {val.phone}</p>
                </div>
                <div className="group_modified_employ_info">
                  <p className="employee-address">Địa chỉ: {val.address}</p>
                </div>
                <div>
                  <button
                    className="btn_fix_employ_info"
                    onClick={submitEmployeeInfo}
                  >
                    Sửa
                  </button>
                </div>

                <p className="employee-code">Mã số nhân viên: {val.id}</p>
                <p className="employee-position">Chức vụ: </p>
                <p className="employee-birthday">Ngày sinh: {val.birthday}</p>
              </div>
            </div>
          ))}
          <div className="input_mail_phone_address">
            <div id="email_modify">
              <input
                type="text"
                placeholder="Nhập email"
                id="input_mail_modify"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>

            <div id="phone_modify">
              <input
                type="text"
                id="input_phone_modify"
                placeholder="Nhập sđt"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              ></input>
            </div>
            <div id="address_modify">
              <input
                type="text"
                placeholder="Nhập địa chỉ"
                id="input_address_modify"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="employee-tasks">
          <h2 className="employee-tasks-title">Công việc và dự án</h2>
          <ul className="employee-task-list"></ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ThongTinNhanVien;
