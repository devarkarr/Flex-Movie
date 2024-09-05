-- -- Create the database
-- CREATE DATABASE online_travel_main;

-- -- Create the user with a password
-- CREATE USER 'user_one'@'localhost' IDENTIFIED BY '123456';

-- -- Grant all privileges on the new database to the user
-- GRANT ALL PRIVILEGES ON online_travel_main.* TO 'user_one'@'localhost';

-- -- Apply the changes
-- FLUSH PRIVILEGES;

-- -- Optional: Start using the new database
-- USE online_travel_main;


-- CREATE TABLE traveler(phone_number var_char(20));



-- -- Create a login
-- CREATE LOGIN YourLoginName WITH PASSWORD = 'YourStrongPassword';

-- -- Create a database user for the login
-- CREATE USER YourUserName FOR LOGIN YourLoginName;

-- -- Grant the user all privileges by adding them to the db_owner role
-- ALTER ROLE db_owner ADD MEMBER YourUserName;



-- -- Perform a full database backup
-- BACKUP DATABASE YourDatabaseName
-- TO DISK = 'C:\Backup\YourDatabaseName.bak'
-- WITH FORMAT, INIT;


-- -- Apply data masking to phone number and email columns
-- ALTER TABLE Traveler
-- ALTER COLUMN phone_number ADD MASKED WITH (FUNCTION = 'partial(0,"XXXXXXX",2)');

-- ALTER TABLE Traveler
-- ALTER COLUMN Email ADD MASKED WITH (FUNCTION = 'email()');



-- CREATE PROCEDURE GetTravelDetails
-- AS
-- BEGIN
--     SELECT HotelName, City, Price, Airline, TravelDate
--     FROM TravelDetailsTable;  -- Replace with your actual table name
-- END;


-- -- Assuming the log table has columns for event date, description, and table name
-- CREATE TRIGGER trgAfterInsertFlight
-- ON Flight  -- Replace with your actual flight table name
-- AFTER INSERT
-- AS
-- BEGIN
--     INSERT INTO Insert_log(EventDate, Description, TableName)
--     VALUES (GETDATE(), 'A new flight record was inserted.', 'Flight');
-- END;




CREATE TABLE employees (
    id bigint primary key auto_increment, 
    first_name varchar(100), 
    last_name varchar(100));

    CREATE TABLE birthdays (
    emp_id bigint,
    birthday date,
    constraint foreign key (emp_id) references employees(id)
);

delimiter \\

CREATE procedure new_employee(
    first char(100), 
    last char(100), 
    birthday date)
BEGIN
    INSERT INTO employees (first_name, last_name) VALUES (first, last);
    SET @id = (SELECT last_insert_id());
    INSERT INTO birthdays (emp_id, birthday) VALUES (@id, birthday);
END;

delimiter ;

 call new_employee("tim", "sehn", "1980-02-03");