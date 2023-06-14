create database fpt;
use fpt;

CREATE TABLE `docs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) NOT NULL,
  `Content` varchar(255) NOT NULL,
  `Date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `employees` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `depart` varchar(45) DEFAULT NULL,
  `master` tinyint DEFAULT NULL,
  `birthday` varchar(20) DEFAULT NULL,
  `address` varchar(70) DEFAULT NULL,
  `acc_name` varchar(45) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1516 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `meetings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `room` varchar(255) NOT NULL,
  `date` datetime NOT NULL,
  `department` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `news` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Title` varchar(45) DEFAULT NULL,
  `Content` varchar(255) DEFAULT NULL,
  `Date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO employees(id, name, email, phone, depart, master, birthday, address, acc_name, password)
VALUES
('1422', 'Nguyễn Viết Công', 'cong171002@gmail.com', '0981624798', 'Phòng kĩ thuật', NULL, '17/10/2002', 'KTX khu B', 'cong171002', '123456'),
('1423', 'Trần Thị Thu', 'thu123@gmail.com', '0987654321', 'Phòng kĩ thuật', NULL, '01/01/1999', 'Hà Nội', 'thu123', '123456'),
('1424', 'Lê Văn Hùng', 'hung456@gmail.com', '0123456789', 'Phòng kế toán', NULL, '12/12/1995', 'Hồ Chí Minh', 'hung456', '123456'),
('1425', 'Nguyễn Thị Anh', 'anh789@gmail.com', '0987654321', 'Phòng tài chính', NULL, '03/03/1998', 'Đà Nẵng', 'anh789', '123456'),
('1426', 'Phạm Văn Thiện', 'thien123@gmail.com', '0123456789', 'Phòng kinh doanh', NULL, '23/05/1996', 'Hà Nội', 'thien123', '123456'),
('1427', 'Vũ Thị Hương', 'huong456@gmail.com', '0987654321', 'Phòng chăm sóc khách hàng', NULL, '07/07/1997', 'Hải Phòng', 'huong456', '123456'),
('1428', 'Trần Văn Dũng', 'dung789@gmail.com', '0123456789', 'Phòng hành chính nhân sự', NULL, '11/11/1993', 'Hồ Chí Minh', 'dung789', '123456'),
('1429', 'Nguyễn Thị Hà', 'ha123@gmail.com', '0987654321', 'Ban lãnh đạo', NULL, '25/12/1990', 'Hà Nội', 'ha123', '123456');

INSERT INTO docs (`id`, `Title`, `Content`, `Date`) 
VALUES 
('20', 'Tài liệu 1', 'Biên bản họp', '4/5/2023, 10:10:11 AM'),
('21', 'Tài liệu 2', 'Báo cáo tài chính', '3/15/2023, 11:20:30 AM'),
('22', 'Tài liệu 3', 'Kế hoạch kinh doanh', '2/2/2023, 2:45:00 PM'),
('23', 'Tài liệu 4', 'Mô tả sản phẩm', '1/4/2023, 3:30:00 PM'),
('24', 'Tài liệu 5', 'Báo cáo thị trường', '11/11/2022, 4:45:00 PM'),
('25', 'Tài liệu 6', 'Hướng dẫn sử dụng', '2/9/2023, 5:30:00 PM');

INSERT INTO news (`id`, `Title`, `Content`, `Date`) 
VALUES 
('1', 'tin tức 1', 'Kiểm tra tài chính tháng 5', '6/4/2023, 8:57:26 AM'),
('2', 'tin tức 2', 'Khảo sát ý kiến nhân viên', '6/5/2023, 9:00:00 AM'),
('3', 'tin tức 3', 'Hội nghị khách hàng tháng 6', '6/6/2023, 10:30:00 AM'),
('4', 'tin tức 4', 'Tuyển dụng nhân viên mới', '6/7/2023, 11:00:00 AM'),
('5', 'tin tức 5', 'Thông báo nghỉ lễ', '6/8/2023, 2:15:00 PM'),
('6', 'tin tức 6', 'Ứng dụng công nghệ mới', '6/9/2023, 4:00:00 PM'),
('7', 'tin tức 7', 'Thông tin chuyển nhượng dự án', '6/10/2023, 5:30:00 PM');



