INSERT INTO Department VALUES
      ( 1, 'Software Dev'),
      ( 2, 'Software Test'),
      ( 3, 'Marketing'),
      ( 4, 'Administration'),
      ( 5, 'Sales');

Insert into employee ("id", "EmployeeNum", "name", "email", "departmentId", "salary") Values
	(1, 'S000000001',  'Sarah', 'sarah1@bigco.com' ,  1 , 110000),
	(2, 'J000000001', 'John', 'john1@bigco.com',  1,  120000),
	(3, 'W000000001' , 'Winston', 'winston1@bigco.com' , 4, 52000),
	(4, 'M000000001', 'Max', 'max1@bigco.com',  1, 105000),
	(5, 'D000000001', 'Dan', 'dan1@bigco.com', 1,  110000),
	(6, 'A000000001', 'Alice', 'alice1@bigco.com',  2, 98000),
        (7, 'S000000001', 'Stan',  'stan1@bigco.com', 1, 190000),
	(8, 'S000000002', 'Sarah', 'sarah1@bigco.com',  2, 110000),
	(9, 'M000000002', 'Mark', 'mark1@bigco.com',  5, 60000),
	(10, 'D000000002', 'Dave', 'dave1@bigco.com',  4, 93000),
	(11, 'J000000002', 'Jack', 'jack1@bigco.com',  1, 92000),
	(12, 'J000000003', 'John',  'john2@bigco.com', 1, 135000),
	(13, 'M000000002', 'Martha', 'martha1@bigco.com',  1, 120000),
	(14, 'A000000002', 'Alice',  'alice2@bigco.com', 5, 72000),
	(15, 'A000000003', 'Albert', 'albart1@bigco.com',  3, 80000);


Insert into Room Values
	(201, 'A', 101, 10),
	(202, 'A', 102, 30),
	(203, 'A', 103, 20),
	(204, 'A', 104, 5),
	(205, 'B', 101, 20),
	(206, 'B', 102, 20),
	(207, 'B', 201, 20),
	(208, 'B', 202, 30),
	(209, 'B', 104, 2);
;

Insert into phone_type values
      ('C', 'Cell'),
      ('W', 'Work'),
      ('H', 'Home'),
      ('P', 'Pager'),
      ('B', 'Business');



Insert into Meeting ("id", "room_id", "startTime", "duration", "purpose", "creator_id", "moderator_id") Values
	(101, 201, '2018-03-04 09:30', '60M', 'Staff', 14, 14),
	(102, 201, '2018-03-11 09:30', '60M', 'Staff', 14, 14),
	(103, 201, '2018-03-18 09:30', '60M', 'Staff', 14, 14),
	(104, 201, '2018-03-25 09:30', '60M', 'Staff', 14, 14),
	(105, 203, '2018-03-04 09:30', '60M', 'Staff',3, 4),
	(106, 203, '2018-03-18 09:30', '60M', 'Staff',3, 4),
	(107, 204, '2018-03-17 11:00', '90M', 'Sales',3, 4),

	(108, 207, '2018-03-09 09:30', '60M', 'DB Issues',6, 5),
	(109, 207, '2018-03-15 09:30' , '60M', 'Post Mortem',5, 15),
	(110, 208, '2018-03-07 11:30', '90M', 'HR Presentation',11,11),
	(111, 202, '2018-03-07 09:30' , '60M', 'Team Build',14, 15),
        (112, 205, '2018-03-21 12:00', '60M', 'Lunch',14, NULL ),
	(113, 205, '2018-03-28 12:00', '60M', 'Lunch',14, NULL ),
	(114, 205, '2018-04-05 12:00', '60M', 'Lunch',14, NULL),
	(115, 205, '2018-03-28 12:00', '60M', 'PlanningLunch',3, 4),
        (116, 204, '2018-03-15 09:30', '60M', 'Post Mortem',5, 15),
        (117, 204, '2018-03-28 12:30', '90M', 'Planning',5, NULL ),
        (118, 204, '2018-03-28 14:00', '90M', 'IT Planning',5, NULL ),
        (119, 208, '2018-03-28 15:00', '90M', 'Test Planning',5, 8 ),
        (120, 207, '2018-03-28 14:00', '180M', 'Party',5, NULL );
;


Insert into Attendees ("meeting_id", "employee_id") values ( 101, 10),(101, 11),(101, 12),(101, 13),(101, 14),(101, 15);
Insert into Attendees ("meeting_id", "employee_id") values ( 102, 10),(102, 11),(102, 12),(102, 13),(102, 14),(102, 15);
Insert into Attendees ("meeting_id", "employee_id") values ( 103, 10),(103, 11),(103, 12),(103, 13),(103, 14),(103, 15),(103,1),(103,8);
Insert into Attendees ("meeting_id", "employee_id") values ( 104, 10),(104, 11),(104, 12),(104, 13),(104, 14),(104, 15);

Insert into Attendees ("meeting_id", "employee_id") values ( 105, 1), (105,2 ),(105,3 ),(105,4 ),(105,5 ),(105,6 );
Insert into Attendees ("meeting_id", "employee_id") values ( 106, 1), (106,2 ),(106,3 ),(106,4 ),(106,5 ),(106,6 ),(106,8);

Insert into Attendees ("meeting_id", "employee_id") values ( 107,8 ), (107,9 ), (107,10 );
Insert into Attendees ("meeting_id", "employee_id") values ( 108,13 ), (108,14), (108,15 ),(108, 9);

Insert into Attendees ("meeting_id", "employee_id") values ( 109, 10),(109, 11),(109, 12),(109, 13),(109, 14),(109, 15);
Insert into Attendees ("meeting_id", "employee_id") values ( 110, 1 ), (110, 2), (110,3 ), (110,4 ), (110,5 ), (110,6 ), (110, 7), (110,8 ), (110,9 ), (110,10 ), (110,11 ), (110,12 ), (110,13 ), (110,14 );
Insert into Attendees ("meeting_id", "employee_id") values ( 111, 1), (111,2 ),(111,3 ),(111,4 ),(111,5 ),(111,6 );
Insert into Attendees ("meeting_id", "employee_id") values ( 112, 6), (112,7 ),(112,8 ),(112,9 ),(112,10 ),(112,11 );
Insert into Attendees ("meeting_id", "employee_id") values ( 113, 6), (113,7 ),(113,8 ),(113,9 ),(113,10 ),(113,11 ),(113, 15);
Insert into Attendees ("meeting_id", "employee_id") values ( 114, 6), (114,7 ),(114,8 ),(114,9 ),(114,10 ),(114,11 );
Insert into Attendees ("meeting_id", "employee_id") values ( 115, 1), (115,2 ),(115,3 ),(115,4 ),(115,5 ),(115,6 ),(115,15);
Insert into Attendees ("meeting_id", "employee_id") values ( 116, 10),(116, 11),(116, 12),(116, 13),(116, 14),(116, 15);
Insert into Attendees ("meeting_id", "employee_id") values ( 117, 4), (117, 6), (117, 8), (117, 10), (117, 12);
Insert into Attendees ("meeting_id", "employee_id") values ( 118, 1), (118,2 ),(118,3 ),(118,4 ),(118,5 ),(118,6 ),(118,15);
Insert into Attendees ("meeting_id", "employee_id") values ( 119,8 ), (119,9 ), (119,10 );
Insert Into Attendees ("meeting_id", "employee_id") values ( 120, 1), ( 120, 2),( 120, 3),( 120, 4),( 120, 5),( 120, 6),( 120, 7),( 120, 8),( 120, 9),( 120, 10),( 120, 11),( 120, 12),( 120, 13),( 120, 14),( 120, 15);

Insert into Phone ( "employeeId", "phoneTypeID", "number")  Values
    (1, 'W', '123-4567'),
    (1, 'C', '123-5678'),
    (1, 'H', '123-6789'),
    (2, 'W', '123-7890'),
    (2, 'H', '128-4567'),
    (2, 'C', '124-5678'),
    (3, 'W', '124-6789'),
    (3, 'P', '124-7890'),
    (4, 'W', '124-4567'),
    (5, 'W', '125-7890'),
    (5, 'H', '125-5678'),
    (5, 'P', '125-6789'),
    (5, 'C', '125-7891'),
    (6, 'W', '126-4567'),
    (6, 'C', '126-5678'),
    (7, 'W', '126-6789'),
    (7, 'H', '126-7890'),
    (8, 'W', '127-4567'),
    (9, 'W', '127-5678'),
    (10, 'W', '127-6789'),
    (10, 'C', '127-7890'),
    (10, 'H', '128-4567'),
    (11, 'W', '128-5678'),
    (11, 'C', '128-6789'),
    (12, 'W', '128-7890'),
    (12, 'C', '129-4567'),
    (13, 'W', '129-5678'),
    (13, 'C', '129-6789'),
    (13, 'H', '129-7890'),
    (14, 'W', '130-4567'),
    (14, 'C', '131-5678'),
    (15, 'W', '132-6789'),
    (15, 'H', '133-7890'),
    (15, 'H', '133-7891'),
    (15, 'P', '134-4567'),
    (15, 'C', '134-4567');


-- updating the sequence since I hardcode IDs above
SELECT setval('room_id_seq', COALESCE((SELECT MAX(id)+1 FROM room), 1), false);
SELECT setval('meeting_id_seq', COALESCE((SELECT MAX(id)+1 FROM meeting), 1), false);
SELECT setval('phone_id_seq', COALESCE((SELECT MAX(id)+1 FROM phone), 1), false);
SELECT setval('department_id_seq', COALESCE((SELECT MAX(id)+1 FROM department), 1), false);
SELECT setval('employee_id_seq', COALESCE((SELECT MAX(id)+1 FROM employee), 1), false);