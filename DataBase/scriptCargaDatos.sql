insert into users(id, name, lastName, birthDate, address, email, avatar, userroles_id) 
values (default ,"David", "Avalos", "1980-05-05", "Cordoba", "avalos@hotmail.com", "default.png", 1);

insert into products(id, name, description, price, bitterness, color, alcohol, body, carbonation, hop, image, category, stock, discount)
values (default, "IRISH RED ALE","Cerveza roja acaramelada con notas maltosas y bajo amargor.","300","10","26","6.5","medio","media/baja","Cascade","beer-1652058793037.png","Estándar","50","0");

insert into userroles (id, roleName) values(default, "user");
