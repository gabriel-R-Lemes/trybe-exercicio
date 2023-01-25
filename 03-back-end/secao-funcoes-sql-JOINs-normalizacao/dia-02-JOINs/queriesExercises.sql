SELECT * FROM pixar.movies;
SELECT * FROM pixar.box_office;

SELECT m.title, b.domestic_sales, b.international_sales
FROM pixar.movies m
INNER JOIN pixar.box_office b
ON m.id = b.movie_id;

SELECT m.title, b.domestic_sales, b.international_sales
FROM pixar.movies m
INNER JOIN pixar.box_office b
ON m.id = b.movie_id
WHERE b.international_sales > b.domestic_sales;

SELECT m.title, b.rating
FROM pixar.movies m
INNER JOIN pixar.box_office b
ON m.id = b.movie_id
ORDER BY b.rating DESC;

SELECT * FROM pixar.theater;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM pixar.theater t
LEFT JOIN pixar.movies m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT t.name, t.location, m.title, m.director, m.year, m.length_minutes
FROM pixar.theater t
RIGHT JOIN pixar.movies m
ON t.id = m.theater_id
ORDER BY t.name;