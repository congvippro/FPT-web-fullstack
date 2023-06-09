import React from "react";
import "./MonthView.css";

class MonthView extends React.Component {
  render() {
    const { year, month, currentDay } = this.props;
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // tạo mảng các ngày trong tháng
    for (let i = 0; i < daysInMonth; i++) {
      const day = i + 1;
      days.push(new Date(year, month, day));
    }

    // tạo các ô ngày
    const cells = days.map((day, index) => {
      const isCurrentDay = day.toDateString() === currentDay.toDateString();
      const className = isCurrentDay ? "cell currentDay" : "cell";
      return (
        <div key={index} className={className}>
          {day.getDate()}
        </div>
      );
    });

    return (
      <div className="calendar-month">
        <div className="header">{`${firstDayOfMonth.toLocaleString("default", {
          month: "long",
        })} ${year}`}</div>
        <div className="weekdays">
          <div className="weekday">Su</div>
          <div className="weekday">Mo</div>
          <div className="weekday">Tu</div>
          <div className="weekday">We</div>
          <div className="weekday">Th</div>
          <div className="weekday">Fr</div>
          <div className="weekday">Sa</div>
        </div>
        <div className="cells-container">
          {/* thêm ô trống vào trước ngày đầu tiên của tháng */}
          {Array(firstDayOfMonth.getDay())
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} className="cell empty" />
            ))}
          {cells}
        </div>
      </div>
    );
  }
}

export default MonthView;
