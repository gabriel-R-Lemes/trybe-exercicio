USE sakila;

SELECT * FROM customer
WHERE store_id = 2
AND active IS FALSE
AND first_name <> 'Kenneth'
ORDER BY first_name;