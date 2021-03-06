CREATE TABLE Candidates ( 
    ID int NOT NULL PRIMARY KEY, 
    first_name varchar(255), 
    last_name varchar(255), 
    birthday int, 
    salary int, 
    portfolio varchar(255), 
    github varchar(255) )

    INSERT INTO Candidates (ID,first_name,last_name,birthday,salary) 
    VALUES (1, "Dev", "ED",02-11-2002, 5000)

CREATE TABLE Languages (
    ID int NOT NULL PRIMARY KEY,
     name varchar(30), 
     candidate_id INT, CONSTRAINT FOREIGN KEY 
     (candidate_id) REFERENCES Candidates(ID))

CREATE TABLE Programming (
     ID int NOT NULL PRIMARY KEY,
     name varchar(30), 
     candidate_id INT, CONSTRAINT FOREIGN KEY 
     (candidate_id) REFERENCES Candidates(ID))
