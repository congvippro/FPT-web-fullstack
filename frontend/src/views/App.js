// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/UserPage/HomePage/HomePage";
import LoginPage from "../components/LoginForm/LoginPage";
import AboutPage from "../components/UserPage/AboutPage/About";
import SchedulePage from "../components/UserPage/SchedulePage/SchedulePage";
import GiaTri from "../components/UserPage/AboutPage/GiaTriCotLoi/GiaTri";
import DocumentPage from "../components/UserPage/DocumentPage/DocumentPage";
import DocsManage from "../components/adminpage/DocsManage/DocsManage";
import NewsManager from "../components/adminpage/NewsManage/NewsManage";
import MeetingRoomManager from "../components/adminpage/ScheduleManage/ScheduleManage";
import ThongTinNhanVien from "../components/UserPage/ThongTinNhanVien/ThongTinNhanVien";
import AccountManage from "../components/adminpage/AccountManage/AccountManage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/document" element={<DocumentPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Gia-tri-cot-loi" element={<GiaTri />} />
          <Route path="/docs-admin" element={<DocsManage />} />
          <Route path="/news-admin" element={<NewsManager />} />
          <Route path="/account-manage" element={<AccountManage />} />
          <Route path="/schedule-admin" element={<MeetingRoomManager />} />
          <Route path="/ThongTinNhanVien" element={<ThongTinNhanVien />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
