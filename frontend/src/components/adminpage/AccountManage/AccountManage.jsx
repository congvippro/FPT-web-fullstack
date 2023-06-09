import React, { useEffect, useState } from "react";
import "./AccountManage.css";
import "../../NavigationBar/Navigate";
import Navigate from "../../NavigationBar/Navigate";
import Axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";

const AccountManage = () => {
  const [accountFields, setAccountFields] = useState({
    acc_name: "",
    password: "",
    email: "",
    address: "",
    phone: "",
    name: "",
    depart: "",
  });

  const [accountList, setAccountList] = useState([]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setAccountFields((prevFields) => ({ ...prevFields, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send edited account data to server
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    // Gửi dữ liệu tài khoản mới lên máy chủ
    Axios.post("http://localhost:3001/api/CreateAccount", accountFields).then(
      (response) => {
        alert("Tạo tài khoản thành công");
      }
    );
  };

  const handleUpdateAccount = (event) => {
    // event.preventDefault();
    // Gửi dữ liệu tài khoản đã chỉnh sửa lên máy chủ
    Axios.put("http://localhost:3001/api/UpdateAccount", accountFields).then(
      (response) => {
        alert("Sửa tài khoản thành công");
      }
    );
  };

  const handleDeleteAccount = (acc_name) => {
    Axios.delete(`http://localhost:3001/api/DeleteAccount/${acc_name}`).then(
      (response) => {
        alert("Xóa tài khoản thành công");
      }
    );
  };

  const handleAccountClick = (account) => {
    setAccountFields({
      acc_name: account.acc_name,
      password: account.password,
      email: account.email,
      address: account.address,
      phone: account.phone,
      name: account.name,
      depart: account.depart,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/AccountGetAll").then((response) => {
      setAccountList(response.data);
    });
  });

  return (
    <div className="admin-AccountManage-page">
      <Navigate />
      <div className="account_manage">
        <h2>Danh sách tài khoản</h2>
        <div className="list_acc">
          {accountList.map((account) => (
            <div
              className="div_list_acc"
              key={account.id}
              onClick={() => handleAccountClick(account)}
              data-account={JSON.stringify(account)}
            >
              <div className="div_AM_left">{account.acc_name}</div>
              <div className="div_AM_right">{account.name}</div>
              <DeleteIcon
                onClick={() => handleDeleteAccount(account.acc_name)}
              />
            </div>
          ))}
        </div>

        <form className="account_manage_form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="acc_name">Tên tài khoản :</label>
            <input
              type="text"
              id="acc_name"
              value={accountFields.acc_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Mật khẩu :</label>
            <input
              type="password"
              id="password"
              value={accountFields.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              value={accountFields.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Địa chỉ :</label>
            <input
              type="text"
              id="address"
              value={accountFields.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Số điện thoại :</label>
            <input
              type="text"
              id="phone"
              value={accountFields.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="name">Họ và tên :</label>
            <input
              type="text"
              id="name"
              value={accountFields.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="depart">Phòng ban:</label>
            <select
              id="depart"
              className="input-select"
              value={accountFields.depart}
              onChange={handleChange}
            >
              <option value="">Chọn phòng ban</option>
              <option value="IT">Phòng IT</option>
              <option value="Finance">Phòng tài chính</option>
              <option value="Marketing">Phòng marketing</option>
              <option value="Accounting">Phòng kế toán</option>
              <option value="Manager">Quản lý</option>
            </select>
          </div>

          <button type="submit" onClick={handleCreateAccount}>
            Tạo tài khoản
          </button>
          <button type="submit" onClick={handleUpdateAccount}>
            Sửa tài khoản
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountManage;
