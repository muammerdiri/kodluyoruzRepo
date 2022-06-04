-- film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
SELECT distinct replacement_cost FROM film;

-- film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
SELECT  distinct replacement_cost FROM film;

-- film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
select * from film where title like 'T%' and rating='G';

-- country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
select count(country) from country where length(country) = 5;

-- city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?
select *from city where city like '%r' or city like '%R';