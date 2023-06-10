import React, { useState, useEffect } from "react";
import Axios from "axios";
import Navigate from "../../NavigationBar/Navigate";
import "./ScheduleManage.css";
import { format } from "date-fns";

function MeetingRoomManager() {
  const [MeetingsList, setMeetingsList] = useState([]);
  const [title, setTitle] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [department, setDepartment] = useState("");
  const [editingMeeting, setEditingMeeting] = useState(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/MeetingsGet").then((response) => {
      setMeetingsList(response.data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingMeeting) {
      updateMeeting();
      alert("Cập nhật thành công.");
    } else {
      submitMeeting();
      alert("Cuộc họp đã được gửi.");
    }
  };

  const submitMeeting = () => {
    Axios.post("http://localhost:3001/api/MeetingsInsert", {
      title: title,
      room: room,
      date: date,
      department: department,
    }).then(() => {
      alert("Meeting has been scheduled.");
    });
  };

  const updateMeeting = () => {
    Axios.put("http://localhost:3001/api/MeetingsUpdate", {
      oldTitle: editingMeeting.title,
      newTitle: title,
      newRoom: room,
      newDate: date,
      newDepartment: department,
    }).then(() => {
      alert("Meeting has been updated.");
      setEditingMeeting(null);
      setMeetingsList(
        MeetingsList.map((meeting) =>
          meeting.title === editingMeeting.title
            ? {
                ...meeting,
                title: title,
                room: room,
                date: date,
                department: department,
              }
            : meeting
        )
      );
    });
  };

  const deleteMeeting = (title) => {
    Axios.delete(`http://localhost:3001/api/MeetingsDelete/${title}`);
    alert("The meeting has been cancelled.");
  };

  return (
    <>
      <Navigate />

      <div className="MeetingRoomManager">
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
              // value={format(new Date(Date.parse(date)), "yyyy-MM-dd'T'HH:mm")}
              value={date}
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
            {editingMeeting ? "Update" : "Submit"}
          </button>
        </form>

        <div className="MeetingRoomListManage">
          <div className="MeetingRoomElementsWrapper">
            {MeetingsList.map((val) => (
              <div className="MeetingRoomElementView" key={val.title}>
                <h2 className="h2_meetingroommanage">{val.title}</h2>
                <div className="MeetingRoomInfo">
                  <div className="MeetingRoomInfoItem">
                    <h3>Thời gian:</h3>
                    <span className="meeting_list_span">
                      Ngày họp: {format(new Date(val.date), "yyyy-MM-dd")}
                    </span>
                    <span className="meeting_list_span">
                      Giờ: {format(new Date(val.date), "HH:mm:ss")}
                    </span>
                  </div>
                </div>
                <div className="button-group">
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteMeeting(val.title);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingMeeting(val);
                      setTitle(val.title);
                      setRoom(val.room);
                      setDate(
                        format(
                          new Date(Date.parse(val.date)),
                          "yyyy-MM-dd'T'HH:mm"
                        )
                      );
                      setDepartment(val.department);
                      alert("Sửa thành công");
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MeetingRoomManager;
