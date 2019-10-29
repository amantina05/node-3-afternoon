--  To add something to a database we use the following syntax: INSERT INTO Table ( column1, column2 ) VALUES ( value1, value2 ); The values we'll change are Table, column, and value. Since we want to insert into the product table, we'll change Table to product. Since we are updating the name, description, price, and image_url, we'll use those as the columns. And since we are using parameters for the values, we'll use $1, $2, $3, and $4 as the values.
INSERT INTO product ( name, description, price, image_url ) VALUES ( $1, $2, $3, $4 );