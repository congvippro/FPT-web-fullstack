import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./MeetingList.css";
import { format } from "date-fns";

function MeetingList() {
  const [meetings, setMeetings] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/api/MeetingsGet").then((response) => {
      setMeetings(response.data);
    });
  }, []);

  return (
    <div>
      {meetings.map((meeting) => (
        <div className="meeting-item" key={meeting.id}>
          <h3>{meeting.title}</h3>
          <span className="meeting_list_span">Phòng họp: {meeting.room}</span>
          <span className="meeting_list_span">
            Ngày họp: {format(new Date(meeting.date), "yyyy-MM-dd")} || Giờ:{" "}
            {format(new Date(meeting.date), "HH:mm:ss")}
          </span>
          <span className="meeting_list_span">
            Phòng ban tham gia: {meeting.department}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MeetingList;
