-- This sql file will be responsible for deleting a specific product by ID. To delete data from a database we use the following syntax: DELETE FROM Table WHERE condition. Since we are working with the product table, we'll change Table to product. Since we are deleting by product ID, we'll change condition to product_id = $1.
DELETE FROM product WHERE product_id = $1;
