import React, { useState } from "react";
import NewNav from "../NewNav/NewNav";
import Footer from "../Footer/Footer";
import Privacy from "./Privacy/Privacy";
import BieuMau from "./BieuMau/BieuMau";
import TaiLieuChuyenMon from "./TaiLieuChuyenMon/TaiLieuChuyenMon";
import Sidebar from "./SidebarDoc";
import "./DocumentPage.css";

function DocumentPage() {
  const [currentPage, setCurrentPage] = useState("Privacy");
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContent = () => {
    switch (currentPage) {
      case "privacy":
        return <Privacy />;
      case "bieumau":
        return <BieuMau />;
      case "tailieuchuyenmon":
        return <TaiLieuChuyenMon />;
      default:
        return <Privacy />;
    }
  };

  return (
    <>
      <div className="docs-page">
        <NewNav />
        <div className="document-content">
          <div className="sidebar-docs">
            <Sidebar handlePageChange={handlePageChange} />
          </div>
          <div className="content-docs">
            <div className="content-docs-wrapper">{renderContent()}</div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}
export default DocumentPage;
