import React, { useState, useEffect } from "react";
import "./DocsManage.css";
import Navigate from "../../NavigationBar/Navigate";
import Axios from "axios";

function DocsManager() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [DocsList, setDocsList] = useState([]);
  const [editingDoc, setEditingDoc] = useState(null);

  const deleteDocs = (title) => {
    Axios.delete(`http://localhost:3001/api/DocsDelete/${title}`);
    alert("đã xóa tài liệu, load lại trang để kiểm tra");
  };

  const submitDocs = () => {
    Axios.post("http://localhost:3001/api/DocsInsert", {
      title: title,
      content: content,
      date: date,
    }).then(() => {
      alert("success insert");
    });
  };

  function handleEditSubmit(event) {
    event.preventDefault();
    if (editingDoc) {
      Axios.put(`http://localhost:3001/api/DocsUpdate/${editingDoc.Title}`, {
        newTitle: title,
        newContent: content,
        newDate: date,
      }).then(() => {
        alert("success update");
        setDocsList((prevList) => {
          const newList = prevList.map((doc) => {
            if (doc.Title === editingDoc.Title) {
              return {
                ...doc,
                Title: title,
                Content: content,
                Date: date,
              };
            } else {
              return doc;
            }
          });
          return newList;
        });
        setEditingDoc(null);
        setTitle("");
        setContent("");
      });
    } else {
      alert("No document selected for edit");
    }
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/DocsGet").then((response) => {
      setDocsList(response.data);
    });

    const intervalId = setInterval(() => {
      const d = new Date();
      setDate(d.toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (editingDoc) {
      handleEditSubmit(event);
    } else {
      submitDocs();
      alert("Đã gửi tài liệu");
    }
  }

  return (
    <>
      <div className="DocsManageView">
        <Navigate />

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="label">
              Tiêu đề tài liệu:
            </label>
            <textarea
              type="text"
              id="title"
              name="docs_title_input"
              className="input-textarea"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="label">
              Nội dung tài liệu:
            </label>
            <textarea
              id="content"
              name="docs_content_input"
              className="input-textarea"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="date" className="label">
              Ngày giờ:
            </label>
            <label id="date" className="date">
              {date}
            </label>
          </div>
          <button type="submit" className="btn-submit">
            {editingDoc ? "Cập nhật" : "Gửi"}
          </button>
        </form>
        <div className="DocsListManage">
          <div className="DocsElementsWrapper">
            {DocsList.map((val) => (
              <div className="DocsElementView">
                <h2 className="h2_docsmanage">{val.Title}</h2>
                <h2 className="h2_docsmanage">{val.Content}</h2>
                <h3>Thời gian gửi: {val.Date}</h3>
                <div className="button-group">
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteDocs(val.Title);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingDoc(val);
                      setTitle(val.Title);
                      setContent(val.Content);
                    }}
                  >
                    Sửa
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
export default DocsManager;
