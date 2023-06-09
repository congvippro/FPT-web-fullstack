import React from "react";
import "./SchedulePage.css";
import Footer from "../Footer/Footer";
import MeetingList from "./MeetingList/MeetingList";
import { CalendarMonth } from "@mui/icons-material";
import MonthView from "./MonthView/MonthView";
import "./SchedulePage.css";
import NewNav from "../NewNav/NewNav";

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
  return (
    <div className="Schedule-page">
      {/* <Navigate /> */}
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
      <Footer />
    </div>
  );
}

export default SchedulePage;
