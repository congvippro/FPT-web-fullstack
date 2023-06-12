import React, { useState, useEffect } from "react";
import "./SchedulePage.css";
import Footer from "../Footer/Footer";
import MeetingList from "./MeetingList/MeetingList";
import { CalendarMonth, Margin } from "@mui/icons-material";
import MonthView from "./MonthView/MonthView";
import "./SchedulePage.css";
import NewNav from "../NewNav/NewNav";
import axios from "axios";

let curr = new Date(); // get current date
let first = curr.getDate() - curr.getDay() + 1; //- 7;
let firstdayOb = new Date(curr.setDate(first));

let options = { year: "numeric", month: "numeric", day: "numeric" };

let firstday = firstdayOb.toLocaleDateString("en-VN", options);
let firstdayTemp = firstdayOb;
let lastday = new Date(
  firstdayTemp.setDate(firstdayTemp.getDate() + 6)
).toLocaleDateString("en-VN", options);

function SchedulePage() {
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMeeting();
  };

  const submitMeeting = () => {
    axios
      .post("http://localhost:3001/api/MeetingsInsert", {
        title: title,
        room: room,
        date: date,
        department: department,
      })
      .then(() => {
        alert("Meeting has been scheduled.");
      });
  };

  return (
    <div className="Schedule-page">
      <NewNav />
      <h1 className="h1-center-schedule">LỊCH HỌP</h1>
      <h2 className="h2-schedule">
        <CalendarMonth />
        {firstday} - {lastday}
      </h2>
      <div className="Month-Week-Calendar-">
        <div className="MonthView-col1">
          <MonthView
            year={curr.getFullYear()}
            month={new Date().getMonth()}
            currentDay={new Date()}
          />
        </div>
        <div className="meeting-list">
          <MeetingList />
        </div>
      </div>
      <h1 className="h1-center">Đăng kí phòng họp</h1>
      <div className="meeting-order">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="meeting-title" className="label">
              Chủ đề họp:
            </label>
            <textarea
              type="text"
              id="meeting-title"
              name="meeting_title_input"
              className="input-textarea"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="meeting-room" className="label">
              Phòng họp:
            </label>
            <select
              id="meeting-room"
              name="meeting_room_input"
              className="input-select"
              value={room}
              onChange={(event) => setRoom(event.target.value)}
            >
              <option value="">Chọn phòng họp</option>
              <option value="A01">Phòng A01</option>
              <option value="A02">Phòng A02</option>
              <option value="B05">Phòng B05</option>
              <option value="B07">Phòng B07</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="meeting-date" className="label">
              Ngày giờ họp:
            </label>
            <input
              type="datetime-local"
              id="meeting-date"
              name="meeting_date_input"
              className="input-text"
              onChange={(event) => setDate(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="meeting-department" className="label">
              Phòng ban tham gia:
            </label>
            <select
              id="meeting-department"
              name="meeting_department_input"
              className="input-select"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >
              <option value="">Select a department</option>
              <option value="Marketing">Marketing</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Accounting">Accounting</option>
              <option value="Toàn công ty">All</option>
            </select>
          </div>
          <button type="submit" className="btn-submit">
            submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SchedulePage;
