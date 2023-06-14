import React, { useState, useEffect } from "react";
import "./NewsManage.css";
import Navigate from "../../NavigationBar/Navigate";
import Axios from "axios";

function NewsManager() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [NewsList, setNewsList] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  const deleteNews = (title) => {
    Axios.delete(`http://localhost:3001/api/NewsDelete/${title}`);
    alert("đã xóa thông báo, load lại trang để kiểm tra");
  };

  const submitNews = () => {
    Axios.post("http://localhost:3001/api/NewsInsert", {
      title: title,
      content: content,
      date: date,
    }).then(() => {
      alert("success insert");
    });
  };

  function handleEditSubmit(event) {
    event.preventDefault();
    if (editingNews) {
      Axios.put(`http://localhost:3001/api/NewsUpdate/${editingNews.Title}`, {
        newTitle: title,
        newContent: content,
        newDate: date,
      }).then(() => {
        alert("success update");
        setNewsList((prevList) => {
          const newList = prevList.map((News) => {
            if (News.Title === editingNews.Title) {
              return {
                ...News,
                Title: title,
                Content: content,
                Date: date,
              };
            } else {
              return News;
            }
          });
          return newList;
        });
        setEditingNews(null);
        setTitle("");
        setContent("");
      });
    } else {
      alert("No Newsument selected for edit");
    }
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/NewsGet").then((response) => {
      setNewsList(response.data);
    });

    const intervalId = setInterval(() => {
      const d = new Date();
      setDate(d.toLocaleString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (editingNews) {
      handleEditSubmit(event);
    } else {
      submitNews();
      alert("Đã gửi thông báo");
    }
  }

  return (
    <>
      <div className="NewsManageView">
        <Navigate />

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" className="label">
              Tiêu đề thông báo:
            </label>
            <textarea
              type="text"
              id="title"
              name="News_title_input"
              className="input-textarea"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="content" className="label">
              Nội dung thông báo:
            </label>
            <textarea
              id="content"
              name="News_content_input"
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
            {editingNews ? "Cập nhật" : "Gửi"}
          </button>
        </form>
        <div className="NewsListManage">
          <div className="NewsElementsWrapper">
            {NewsList.map((val) => (
              <div className="NewsElementView">
                <h2 className="h2_Newsmanage">{val.Title}</h2>
                <h2 className="h2_Newsmanage">{val.Content}</h2>
                <h3>Thời gian gửi: {val.Date}</h3>
                <div className="button-group">
                  <button
                    className="delete-btn"
                    onClick={() => {
                      deleteNews(val.Title);
                    }}
                  >
                    Xóa
                  </button>
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingNews(val);
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
export default NewsManager;
