CREATE DATABASE  IF NOT EXISTS `chec_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chec_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: chec_db
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `detailsales`
--

LOCK TABLES `detailsales` WRITE;
/*!40000 ALTER TABLE `detailsales` DISABLE KEYS */;
/*!40000 ALTER TABLE `detailsales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'IPA','Cerveza rubia amarga con aromas herbales que aportan sus lÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºpulos cascade y chinok',300.00,40,9,5.20,'liviano','media/carbonation','Cascade','ipa.png','Estandar',50,0),(2,'STOUT','Cerveza negra con notas a café y chocolate levemente lupulada y moderada en alcohol.',300.00,15,32,7.50,'pesado','altisima','Cascade','stout.png','Estandar',50,0),(3,'GOLDEN','Cerveza rubia, refrescante fácil y de tomar por su balance y bajo amargor.',300.00,7,5,5.00,'liviano','media','Cascade','golden.png','Estandar',50,0),(4,'IRISH RED ALE','Cerveza roja acaramelada con notas maltosas y bajo amargor.',300.00,10,26,6.50,'medio','media/baja','Cascade','irish.png','Estandar',50,0),(5,'HONEY','Cerveza rubia de alto dulzor con notas de sabor a miel. .',300.00,7,5,5.00,'liviano','media','Cascade','golden.png','Estandar',50,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Golden Ale ',55.00,60.00,4.50,1008.00,1050.00,5,4,64.00,60.00,60.00,18.00,'Pilsen',14.00,'',60.00,'',0.00,'',0.00,'',0.00,'Cascade',5.00,'First worth','',0.00,NULL,'',0.00,NULL,'S05',0.70,'Una vez alcanzada la densidad final, agregar 8 grs. por litro de gelatina sin sabor para lograr una cerveza mÃƒÆ’Ã‚Â¡s clara.','Pizza y cerveza siempre van de la mano. También probar combinarla con bombas de papa.'),(2,'IPA',55.00,60.00,5.00,1010.00,1055.00,5,4,64.00,67.00,75.00,18.00,'Pilsen',13.50,'Trigo',1.50,'Biscuit',0.80,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth','Citra',30.00,'Hop stand','Centennial',25.00,'Hop stand','S05',0.70,'Enfriar el mosto a 80Ãƒâ€šÃ‚Â° para el hop stand por 30 min.','Pollo asado. Bondiola braseada.'),(3,'Honey',55.00,60.00,4.50,1008.00,1050.00,5,4,64.00,60.00,60.00,18.00,'Pilsen',14.00,'Miel',0.50,NULL,NULL,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth',NULL,NULL,NULL,NULL,NULL,NULL,'S05',0.70,'Agregar los 500 grs de miel en final de fermentaciÃƒÆ’Ã‚Â³n.','Pizza.'),(4,'Irish Red',55.00,60.00,6.00,1012.00,1060.00,5,4,65.00,60.00,90.00,18.00,'Pilsen',12.00,'Biscuit',1.00,'Caramelo 60',0.80,'Caramelo 120',0.40,'Chocolate',0.40,'Cascade',5.00,'First worth','Chinook',15.00,'Minuto 10',NULL,NULL,NULL,'S05',0.70,'Una vez terminado el macerado, llevar a 72Ãƒâ€šÃ‚Â° para un mash out de 15 minutos.','A COMPLETAR.');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `recipes_users`
--

LOCK TABLES `recipes_users` WRITE;
/*!40000 ALTER TABLE `recipes_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipes_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,NULL,NULL,NULL,1,8),(2,NULL,NULL,NULL,1,12);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pablo','Montenegro','1987-04-05','capital','pablo@mail.com','default.png','$2a$10$R9DCK9YJ69ccMYoiEBxJCuSVe0yXA5025NKkH1Ri4/AfaGsToafpG',1,0,NULL),(2,'Joaquín','Perez','1987-02-05','Calle 1234','djuncos@mail.com','default.png','$2a$10$Xd3HSLS7aQ3hR2kujL4d9umbOTYdexHyks1foQN6FNLDGc9otVoNW',1,0,NULL),(3,'Alina','Moran','1979-01-07','Calle 123','alina.moran@outlook.com','1656207727262_img.png','$2a$10$V7qHyVxdeW29rCQkJdNvXO.J3qqU9s4H222PVec5s67xDnJxLgwHe',1,1,NULL),(4,'Agostina','Moran','1998-08-05','Calle 123','ago@mail.com','1656280097965_img.png','$2a$10$u0C4pbqllWBcaqSln6dEZO.o4oFECLlAM62O59uDJ988LzcyXkYQ6',1,1,NULL),(5,'Carlos','Firpo','2000-08-01','Calle 123','carlos@mail.com','1656339535904_img.png','$2a$10$dk2rnhI3Lri8EFQ6U/GwSO5XqSJtjP7YjmcyQkt0WopOSuGV4bXQC',1,1,NULL),(6,'Martín','Marquez','2022-06-11','Calle 132 nro 465','lm.baladovidal@gmail.com','1656420199161_img.png','$2a$10$TVJCD7qxfu6BT.4wFA4RzO0W3AQ5ZwlQsDDSPVnwkJUZJxtsNUU7K',1,1,NULL),(7,'Lizandro','Gomez','2022-06-19','Calle 132 nro 465','lgomez@joseguma.com','default_img.png','$2a$10$dzGklV4lQSE5pp0pnLh/ru8EGt7R7g5cpcJU2sa7w50ats4c8yHdC',1,1,NULL),(8,'Nicolás','Menedez','1982-12-08','Independencia 717','nmenendez@gmail.com','default_img.png','$2a$10$ZcmqP7cKwL5ROEZKlEDoxeu5vg2NC.fiWnXG1mx/NZ.Y8dm8c5Euq',1,1,NULL),(9,'María','Juarez','1982-01-01','Independencia 718','mjuarez@gmail.com','default_img.png','$2a$10$E2AZEY1GlM0UgdsZD6wN0O3yqcdqGxA1Q1hF3Zf2yo.mgQ9cY8bsa',1,1,NULL),(10,'Hanna','Maradona','1982-01-01','Independencia 719','hanna@gmail.com','default_img.png','$2a$10$7Vv/nDGWQsGh/z1fjiTSgOKjWFwUtk1MXrDlBdrCA.B17RdZ4m5p2',1,1,NULL),(11,'Julia','Perez','1979-01-07','Calle 123','julia@mail.com','1656727419217_img.png','$2a$10$7rPLkh83gIyxHT3LoIYW7O1SCdtmuYqvw6IdtJS2VDlTctWGkTvpC',0,1,NULL),(12,'Paula','Bosco','1985-03-26','Calle456','paulab@gmail.com','1656797748885_img.png','$2a$10$U4VXzaCZBU2.R/OOyeZLZux5TdF0o8iJ2LsoQ7L2Txg81ooUiCnp6',0,1,NULL),(13,'Alba','Morán','1979-01-07','Padua','alba.morann@gmail.com','1656882298132_img.png','$2a$10$lquF3AqMVHgfpulA/eELReTCFILjNrHfeUlZP3fyZL4WUBw.vQS0O',1,2,NULL),(14,'David','Juncos','1982-12-08','Cordoba','djuncos@gmail.com','1656882384413_img.png','$2a$10$AoW0XgBteRWs2DNkFmPuOOqoKdINXknPyr4y8n8FMZgzYrbdF2v2e',1,2,NULL),(15,'Leandro','Balado Vidal','1980-06-05','Cordoba','leandrobv@gmail.com','1656882465284_img.png','$2a$10$hiI4/QqsZJ/TtZMPo/iFWO4R/B9p6WROPGoP6vLxW4kokq7astYpy',1,2,NULL),(16,'Ara','Catalano','1985-03-26','Lacarra 565 - Piso 11','aracelicatalano@gmail.com','1656882514763_img.png','$2a$10$luQ7ojFMXqCUV0Hpj10YnufqlCebKX6Y8uDZ0Pb7wKWFie0cYQag2',1,2,NULL),(17,'Usuario','TestDesactivar','1988-07-08','Calle Falsa 678','test@test.com','1656885405765_img.png','$2a$10$.fE1PVDYkcVWukn02qDjqO8hwqX8NQzLSyqgiMpRNC1PJWJwv7ybe',0,1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-03 19:05:41
