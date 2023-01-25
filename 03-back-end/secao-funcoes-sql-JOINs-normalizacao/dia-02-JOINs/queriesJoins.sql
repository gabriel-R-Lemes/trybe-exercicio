SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT DISTINCT a.first_name, a.actor_id, f.film_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_id;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
LEFT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM sakila.customer AS c
INNER JOIN sakila.actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;