insert into students(id, Name,City) 
values(1, "Véronique","Paris"), 
('2', 'Steeven','Lyon'), 
('3', 'Marc','Marseille'), 
('4', 'Nour','Lyon'), 
('5', 'Romain','Paris'), 
('6', 'Sophie','Paris')

CREATE TABLE languages (ID int,Name varchar(30))

INSERT INTO languages (ID,Name) VALUES(1,"French"),(2,"English"),(3,"German"),(4,"Spanish"),(5,"Mandarin")

CREATE TABLE favorites (id int, class varchar(30), sport varchar(30), student_id int )

