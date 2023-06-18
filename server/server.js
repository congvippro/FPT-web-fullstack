const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "fpt",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============================================DOCS MANAGE=======================================================

app.post("/api/DocsInsert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = req.body.date;
  const sqlInsert = "insert into docs(Title, Content, Date) values (?,?,?)";
  db.query(sqlInsert, [title, content, date], (err, result) => {});
});

app.get("/api/DocsGet", (req, res) => {
  const sqlSelect = "Select * from docs";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.delete("/api/DocsDelete/:Title", (req, res) => {
  const Title = req.params.Title;
  const sqlDelete = "Delete from docs where Title = ?  ";
  db.query(sqlDelete, Title, (err, result) => {});
});

app.put("/api/DocsUpdate/:Title", (req, res) => {
  const oldTitle = req.params.Title;
  const newTitle = req.body.newTitle;
  const newContent = req.body.newContent;
  const newDate = req.body.newDate;

  const sqlUpdate =
    "UPDATE docs SET Title = ?, Content = ?, Date = ? WHERE Title = ?";
  db.query(
    sqlUpdate,
    [newTitle, newContent, newDate, oldTitle],
    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ error: "An error occurred while updating the document" });
      } else {
        res.status(200).send({ message: "Document updated successfully" });
      }
    }
  );
});
//====================================================NEWS ADMIN============================================================
app.post("/api/NewsInsert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const date = req.body.date;
  const sqlInsert = "insert into News(Title, Content, Date) values (?,?,?)";
  db.query(sqlInsert, [title, content, date], (err, result) => {});
});

app.get("/api/NewsGet", (req, res) => {
  const sqlSelect = "Select * from News";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.delete("/api/NewsDelete/:Title", (req, res) => {
  const Title = req.params.Title;
  const sqlDelete = "Delete from News where Title = ?  ";
  db.query(sqlDelete, Title, (err, result) => {});
});

app.put("/api/NewsUpdate/:Title", (req, res) => {
  const oldTitle = req.params.Title;
  const newTitle = req.body.newTitle;
  const newContent = req.body.newContent;
  const newDate = req.body.newDate;

  const sqlUpdate =
    "UPDATE News SET Title = ?, Content = ?, Date = ? WHERE Title = ?";
  db.query(
    sqlUpdate,
    [newTitle, newContent, newDate, oldTitle],
    (err, result) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send({ error: "An error occurred while updating the news" });
      } else {
        res.status(200).send({ message: "News updated successfully" });
      }
    }
  );
});

// ============================================EMPLOYEE MODIFIED INFO=======================================================

app.get("/api/EmployeeInfoGet", (req, res) => {
  const sqlSelect = "Select * from employees where id = 1422 ";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/EmployeeModified", (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const id = req.body.id;
  console.log(id, email, phone, address);
  const sqlModified =
    "update employees set email = ?, phone = ?, address = ? where id = ?";
  db.query(sqlModified, [email, phone, address, id], (err, result) => {
    console.log(result);
  });
});
//========================================MANAGE EMPLOYEES ACCOUNT===================================

app.post("/api/AccountPost", (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  // const username = req.body.username;
  // const password = req.body.password;
  // const name = req.body.name;
  // const department = req.body.department;
  const id = req.body.id;
  const sqlModified =
    "update employees set email = ?, phone = ?, address = ?  where id = ?";
  db.query(sqlModified, [email, phone, address, id], (err, result) => {
    console.log(result);
  });
});

app.get("/api/AccountGetAll", (req, res) => {
  const sqlSelect = "Select * from employees";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/CreateAccount", (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const acc_name = req.body.acc_name;
  const password = req.body.password;
  const name = req.body.name;
  const depart = req.body.depart;

  const sqlInsert =
    "INSERT INTO employees (email, phone, address, acc_name, password, name, depart) VALUES (?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [email, phone, address, acc_name, password, name, depart],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error creating account");
      } else {
        res.status(201).send("Account created");
      }
    }
  );
});

app.put("/api/UpdateAccount", (req, res) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const acc_name = req.body.acc_name;
  const password = req.body.password;
  const name = req.body.name;
  const depart = req.body.depart;
  const id = req.body.id;

  const sqlUpdate =
    "UPDATE employees SET email = ?, phone = ?, address = ?, acc_name = ?, password = ?, name = ?, depart = ? WHERE name = ?";
  db.query(
    sqlUpdate,
    [email, phone, address, acc_name, password, name, depart, name],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error updating account");
      } else {
        res.status(200).send("Account updated");
      }
    }
  );
});

app.delete("/api/DeleteAccount/:acc_name", (req, res) => {
  const acc_name = req.params.acc_name;

  const sqlDelete = "DELETE FROM employees WHERE acc_name = ?";
  db.query(sqlDelete, acc_name, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error deleting account");
    } else {
      res.status(200).send("Account deleted");
    }
  });
});

// ===============================LỊCH PHÒNG HỌP=============================================
app.post("/api/MeetingsInsert", (req, res) => {
  const title = req.body.title;
  const room = req.body.room;
  const date = req.body.date;
  const department = req.body.department;

  const sqlInsert =
    "INSERT INTO meetings (title, room, date, department) VALUES (?, ?, ?, ?)";
  db.query(sqlInsert, [title, room, date, department], (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});

app.get("/api/MeetingsGet", (req, res) => {
  const sqlSelect = "SELECT * FROM meetings";
  db.query(sqlSelect, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/api/MeetingsGetIT", (req, res) => {
  const sqlSelect =
    "SELECT * FROM meetings where department = 'IT' or department = 'Toàn công ty'";
  db.query(sqlSelect, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/api/MeetingsUpdate", (req, res) => {
  const oldTitle = req.body.oldTitle;
  const newTitle = req.body.newTitle;
  const newRoom = req.body.newRoom;
  const newDate = req.body.newDate;
  const newDepartment = req.body.newDepartment;

  const sqlUpdate =
    "UPDATE meetings SET title = ?, room = ?, date = ?, department = ? WHERE title = ?";
  db.query(
    sqlUpdate,
    [newTitle, newRoom, newDate, newDepartment, oldTitle],
    (err, result) => {
      if (err) console.log(err);
      else console.log(result);
    }
  );
});

app.delete("/api/MeetingsDelete/:title", (req, res) => {
  const title = req.params.title;

  const sqlDelete = "DELETE FROM meetings WHERE title = ?";
  db.query(sqlDelete, [title], (err, result) => {
    if (err) console.log(err);
    else console.log(result);
  });
});

// ===============================================LOGIN==========================================

// ==============================================================================================
app.listen(3001, () => {
  console.log("running on port 3001");
});
