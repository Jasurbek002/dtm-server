

insert into universty(univername,region) values ('Yuridik universitet','toshkent shaxar'), ('Irigatsiya universiteti','toshkent shaxar'),
('Fargona davlat universiteti','Fargona viloyati'),('Andijon meditsina I','Andijon viloyati'),
('Toshkent sharqshunoslik I','Toshkent shaxar'),('Toshkent moliya I','toshkent');

insert into universty(univername,region) values 
('TDTU','toshkent shaxar'),('TATU','toshkent shaxar'),
('Toshkent transprt universiteti','toshkent shaxar'),
('Toshkent meditsina universiteti','toshkent shaxar');




insert into faculty(univer_id,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count) values
(1,'Yuris pridensiya','5','20',189,140.2),
(1,'Qishloq xojalik sudi','10','27',179,111.1),
(1,'Oliy sud turlar boyicha','15','18',184,115.3),
(1,'Jinoyat sudi turlar boyicha','10','21',177,103.3),
(1,'Halqaro huquq va huquqshunoslik','8','29',188,109.8);

insert into faculty(univer_id,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count) values
(7,'Electronika va avtomatika','5','20',189,140.2),
(7,'Electr energetika turlar boyicha','10','27',179,111.1),
(7,'neft va gaz turlar boyicha','15','18',184,115.3),
(7,'avtomabilsozlik va traktorsozlik','10','21',177,103.3),
(7,'biotibbiot muxandisligi','8','29',188,109.8);


insert into faculty(univer_id,facultyname,grant_score,kontrakt_score,grant_count,kontrakt_count) values
(10,'Dvolash ishi','5','20',174,100.2),
(10,'Xalq tabobati','10','27',179,111.1),
(10,'Biotibbiyot muxandisligi','15','18',134,85),
(10,'Kardio xirurgiya','10','21',177,103.3),
(10,'Kardio jarroxlig','8','29',188,109.8);



insert into science(univer_id,sciencename) values
 (7,'matimatika'),(7,'fizika') ,(7,'ingliz tili') , (7,'ingliz tili'),
(10,'kimyo'),(10,'Biologiya'),(10,'kimyo'),(10,'Biologiya'),(1,'ingliz tili'),(1,'tarix');

insert into tests(title,science_id) values
('avtomail 5 min da 2 km masofa bosib otdi uning tezliguni xisoblang',10),
('erkin tushish tezlanishi g qaysi javobda togri berilgan',10),
('tezlik ni formulasi qaysi javobda togri berilgan',10),
('normal atmosfera bosmi qancha',10),
('Nisbiylik nazaryasini kim kafsh qilgan',10),
('avtomail 10 min da 5 km masofa bosib otdi uning tezliguni xisoblang',10),
('erkin elektronlarning tartibsiz harakatiga',10),
('1 mm simob ustuni nimaga teng',10),
('Baromertrning vazifasi nima',10),
('Voltmetr yordamida nima olchanadi',10)
;

insert into answers(test_id,a,b,c,d,truee) values
(1,'40','30','50','60','40'),
(2,'11','12.3','9.8','10','9.8'),
(3,'t=s/v','v=s/t','v=t','t=v-s','v=s/t'),
(4,'40mmsb','300mmsb','540mmsb','760mmsb','760mmsb'),
(5,'A.Enysheyn','R.Guk','Nyuton','Arxmed','A.Enysheyn'),
(6,'40','20','50','60','20'),
(7,'tok','kuchlansh','raziryad','quvvat','tok'),
(8,'432','300','133,322','60','133,322'),
(9,'Bosmni olchash','tokni olchash','quvvatni olchash','kuchlanshni olchash','Bosmni olchash'),
(10,'tokni olchash','Bosmni olchash','kuchlanshni olchash','quvvatni olchash','tokni olchash');


insert into answers(test_id,a,b,c,d,truee) values
(1,'5','30','50','60','5'),
(2,'a*b','a-b','b-c','a*a','a*b'),
(3,'50','25','30','40','25'),
(4,'300000','200000','100000','400000','300000'),
(5,'5','2','0','3','3'),
(6,'51','52','52.5','60','52.5'),
(7,'8 haxiyson','ikkisi haqiyqiy son','6 haqiyqiy son','a va b togri','ikkisi haqiyqiy son'),
(8,'4.8','-4.8','6.4','5','-4.8'),
(9,'a*a','a/a','a-b','a*b','a*a'),
(10,'butun son','murakkab son','idzli son','toq son','murakkab son');





insert into tests(title,science_id) values
('Choose the answer which correctly completes the sentence.Internet news … you more information than TV news.',11),
('The superstition that thirteen is unlucky goes back to a Scandinavian myth. There were originally only twelve … and then came the evil god Loki to make thirteen.',11),
('The doctors … were waiting outside the office.',11),
('John Keynes used his … of economics to help his college and himself.',11),
('Choose the answer which correctly completes the sentence In 1938 Pearl S. Buck became the first American … to receive the Noble Prize for Literature.',11),
('Choose the answer which correctly completes the sentence. Faced with petroleum shortages in the 1970s, scientists and … in the',11),
('Hundreds of tigers are still being illegally killed throughout Asia. Every day two wild ',11),
('Choose the answer which correctly completes the sentence.He has plenty of … in his library.',11),
('Choose the answer which correctly completes the sentence.Rabbits have large front …, short tails, and hind legs and feet adapted for',11),
('Choose the answer which correctly completes the sentence. We have 150 minutes for our tests.',11);


insert into answers(test_id,a,b,c,d,truee) values
(21,'god','gods','god s','gods','gods'),
(22,'is','are t','are','i snt','is'),
(23,'gives','is given','are given','give','give'),
(24,'patients','patients','patient','patients','patient'),
(25,'knowledges','knowledge','a knowledge','knowledges','knowledges'),
(26,'woman s','woman','women','women s','women s'),
(27,'engineers ','engineer','engineer s','engineers','engineer'),
(28,'books ','books','book','book s','book'),
(29,'teeth','teeth s','tooth','tooth s','teeth'),
(30,'god','gods','god s','tooth','god');
