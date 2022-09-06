create database dtm_db;

create extension pgcrypto;


drop table if exists admins;
create table admins(
   admin_id serial primary key,
   adminname varchar(36) not null,
   password varchar(60) not null,
   status varchar(40) default 'admin',
   created_at timestamp default current_timestamp
);

 drop table if exists users;
 create table users(
   user_id serial primary key,
   username varchar(40) not null,
   password varchar(60) not null,
   contact varchar(9) not null,
   gender varchar(20) not null 
 );


drop table if exists universty;
create table universty(
  univer_id serial primary key,
  univername varchar(500) not null,
  region varchar(50) not null,
  created_at timestamp default current_timestamp
);

drop table if exists faculty;
create table faculty(
  faculty_id serial primary key,
  univer_id int references universty(univer_id),
  facultyname varchar(200) not null,
  grant_score varchar(5) not null,
  kontrakt_score varchar(5) not null,
  grant_count decimal(5,1)not null,
  kontrakt_count decimal(5,1) not null,
  created_at timestamp default current_timestamp
);

drop table if exists science;
create table science(
  science_id serial primary key,
  univer_id int references universty(univer_id),
  sciencename varchar(50) not null,
  created_at timestamp default current_timestamp
);


drop table if exists tests;
create table tests(
  test_id serial primary key,
  title varchar(1000) not null,
  science_id int references science(science_id)
);

drop table if exists answers;
create table answers(
  answer_id serial primary key,
  test_id int references tests(test_id),
  a varchar(50) not null,
  b varchar(50) not null,
  c varchar(50) not null,
  d varchar(50) not null,
  truee varchar(50) not null
);

drop table if exists resalts;
create table resalts(
  resalt_id serial primary key,
  user_id int not null,
  faculty_id int not null,
  useranswer1 varchar(40) not null,
  useranswer2 varchar(40) not null,
  useranswer3 varchar(40) not null,
  useranswer4 varchar(40) not null,
  useranswer5 varchar(40) not null,
  useranswer6 varchar(40) not null,
  useranswer7 varchar(40) not null,
  useranswer8 varchar(40) not null,
  useranswer9 varchar(40) not null,
  useranswer10 varchar(40) not null
);


 insert into users(username,password,contact,gender) 
 values ('jasur',crypt('12345678',gen_salt('bf')),'908266777','male');







 