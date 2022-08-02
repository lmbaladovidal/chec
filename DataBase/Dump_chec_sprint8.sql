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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(65) NOT NULL DEFAULT 'Estandar',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Estandar'),(2,'Especial'),(3,'Merchandising');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detailsales`
--

DROP TABLE IF EXISTS `detailsales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailsales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `price` decimal(6,2) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `created_at` time DEFAULT NULL,
  `updated_at` time DEFAULT NULL,
  `sales_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_detail_sales_product1_idx` (`product_id`),
  KEY `fk_detail_sales_sales1_idx` (`sales_id`),
  CONSTRAINT `fk_detail_sales_product1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_detail_sales_sales1` FOREIGN KEY (`sales_id`) REFERENCES `sales` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailsales`
--

LOCK TABLES `detailsales` WRITE;
/*!40000 ALTER TABLE `detailsales` DISABLE KEYS */;
INSERT INTO `detailsales` VALUES (13,300.00,1,'14:06:11','14:06:11',4,2),(14,300.00,1,'14:06:17','14:06:17',4,1),(15,300.00,1,'14:31:38','14:31:38',5,2),(16,300.00,1,'14:31:44','14:31:44',5,2);
/*!40000 ALTER TABLE `detailsales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `price` decimal(6,2) DEFAULT NULL,
  `bitterness` int DEFAULT NULL,
  `color` int DEFAULT NULL,
  `alcohol` decimal(6,2) DEFAULT NULL,
  `body` varchar(45) DEFAULT NULL,
  `carbonation` varchar(45) DEFAULT NULL,
  `hop` varchar(45) DEFAULT NULL,
  `image` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'IPA','Cerveza rubia amarga con aromas herbales que aportan sus lupulos cascade y chinok',300.00,40,9,5.20,'liviano','media/carbonation','Cascade','https://res.cloudinary.com/ds0upcco9/image/upload/v1659243447/images/products/Gold_d6cxlm.png','1',50,0),(2,'STOUT','Cerveza negra con notas a cafe y chocolate levemente lupulada y moderada en alcohol.',300.00,15,32,7.50,'pesado','altisima','Cascade','https://res.cloudinary.com/ds0upcco9/image/upload/v1659243447/images/products/stout_macppl.png','1',50,0),(3,'GOLDEN','Cerveza rubia, refrescante facil y de tomar por su balance y bajo amargor.',300.00,7,5,5.00,'liviano','media','Cascade','https://res.cloudinary.com/ds0upcco9/image/upload/v1659243447/images/products/Gold_d6cxlm.png','1',50,0),(4,'IRISH RED ALE','Cerveza roja acaramelada con notas maltosas y bajo amargor.',300.00,10,26,6.50,'medio','media/baja','Cascade','https://res.cloudinary.com/ds0upcco9/image/upload/v1659243446/images/products/irish_cwcrim.png','1',50,0),(5,'HONEY','Cerveza rubia de alto dulzor con notas de sabor a miel. .',300.00,7,5,5.00,'liviano','media','Cascade','https://res.cloudinary.com/ds0upcco9/image/upload/v1659243447/images/products/honey_keowji.png','1',50,0),(7,'POSAVASOS WHITE','Posavasos color blanco',100.00,0,0,0.00,'0','0','0','https://res.cloudinary.com/ds0upcco9/image/upload/v1659140230/images/products/posavasos2_wxotmf.png','3',125,0),(8,'POSAVASOS BLACK','Posavasos color negro',100.00,0,0,0.00,'0','0','0','https://res.cloudinary.com/ds0upcco9/image/upload/v1659140230/images/products/posavasos1_ym6f00.png','3',125,NULL),(9,'PACK GOLDEN','Lata de cerveza golden + posavasos white',350.00,0,0,0.00,'0','0','0','https://res.cloudinary.com/ds0upcco9/image/upload/v1659140231/images/products/pack2_fmxrbr.png','2',50,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes`
--

DROP TABLE IF EXISTS `recipes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `volume` decimal(6,2) NOT NULL,
  `boilvolume` decimal(6,2) NOT NULL,
  `alcohol` decimal(6,2) NOT NULL,
  `targetFG` decimal(6,2) NOT NULL,
  `targetOG` decimal(6,2) NOT NULL,
  `initialPH` int NOT NULL,
  `finalPH` int NOT NULL,
  `mashTemp` decimal(6,2) NOT NULL,
  `mashTime` decimal(6,2) NOT NULL,
  `boilTime` decimal(6,2) NOT NULL,
  `fermentationTemp` decimal(6,2) NOT NULL,
  `malt1` varchar(45) NOT NULL,
  `malt1Amount` decimal(6,2) NOT NULL,
  `malt2` varchar(45) DEFAULT NULL,
  `malt2Amount` decimal(6,2) DEFAULT NULL,
  `malt3` varchar(45) DEFAULT NULL,
  `malt3Amount` decimal(6,2) DEFAULT NULL,
  `malt4` varchar(45) DEFAULT NULL,
  `malt4Amount` decimal(6,2) DEFAULT NULL,
  `malt5` varchar(45) DEFAULT NULL,
  `malt5Amount` decimal(6,2) DEFAULT NULL,
  `hop1` varchar(45) NOT NULL,
  `hop1Amount` decimal(6,2) NOT NULL,
  `hop1Moment` varchar(45) DEFAULT NULL,
  `hop2` varchar(45) DEFAULT NULL,
  `hop2Amount` decimal(6,2) DEFAULT NULL,
  `hop2Moment` varchar(45) DEFAULT NULL,
  `hop3` varchar(45) DEFAULT NULL,
  `hop3Amount` decimal(6,2) DEFAULT NULL,
  `hop3Moment` varchar(45) DEFAULT NULL,
  `yeast` varchar(45) NOT NULL,
  `yeastAmount` decimal(6,2) NOT NULL,
  `brewerTip` varchar(500) NOT NULL,
  `foodPairing` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Golden Ale',55.00,60.00,4.50,1008.00,1050.00,5,4,64.00,60.00,60.00,18.00,'Pilsen',14.00,'',60.00,'',0.00,'',0.00,'',0.00,'Cascade',5.00,'First worth','',0.00,NULL,'',0.00,NULL,'S05',0.70,'Una vez alcanzada la densidad final, agregar 8 grs. por litro de gelatina sin sabor para lograr una cerveza mÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s clara.','Pizza y cerveza siempre van de la mano. TambiÃ©n probar combinarla con bombas de papa.'),(2,'IPA',55.00,60.00,5.00,1010.00,1055.00,5,4,64.00,67.00,75.00,18.00,'Pilsen',13.50,'Trigo',1.50,'Biscuit',0.80,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth','Citra',30.00,'Hop stand','Centennial',25.00,'Hop stand','S05',0.70,'Enfriar el mosto a 80ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° para el hop stand por 30 min.','Pollo asado. Bondiola braseada.'),(3,'Honey',55.00,60.00,4.50,1008.00,1050.00,5,4,64.00,60.00,60.00,18.00,'Pilsen',14.00,'Miel',0.50,NULL,NULL,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth',NULL,NULL,NULL,NULL,NULL,NULL,'S05',0.70,'Agregar los 500 grs de miel en final de fermentaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n.','Pizza.'),(4,'Irish Red',55.00,60.00,6.00,1012.00,1060.00,5,4,65.00,60.00,90.00,18.00,'Pilsen',12.00,'Biscuit',1.00,'Caramelo 60',0.80,'Caramelo 120',0.40,'Chocolate',0.40,'Cascade',5.00,'First worth','Chinook',15.00,'Minuto 10',NULL,NULL,NULL,'S05',0.70,'Una vez terminado el macerado, llevar a 72ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â° para un mash out de 15 minutos.','A COMPLETAR.'),(25,'STOUT',20.00,30.00,7.00,9.00,9.00,9,9,9.00,9.00,90.00,9.00,'MALTA TEST',9.00,'',90.00,'',0.00,'',0.00,'',0.00,'LUPULO TEST',9.00,NULL,'',0.00,NULL,'',0.00,NULL,'YEAST TEST',9.00,'','');
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recipes_users`
--

DROP TABLE IF EXISTS `recipes_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recipes_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `users_id` int NOT NULL,
  `recipes_id` int NOT NULL,
  PRIMARY KEY (`id`,`users_id`,`recipes_id`),
  KEY `fk_recipes_users_users1_idx` (`users_id`),
  KEY `fk_recipes_users_recipes1_idx` (`recipes_id`),
  CONSTRAINT `fk_recipes_users_recipes1` FOREIGN KEY (`recipes_id`) REFERENCES `recipes` (`id`),
  CONSTRAINT `fk_recipes_users_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes_users`
--

LOCK TABLES `recipes_users` WRITE;
/*!40000 ALTER TABLE `recipes_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipes_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shippingCost` decimal(6,2) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `total` decimal(6,2) DEFAULT NULL,
  `state` int DEFAULT NULL,
  `users_id` int NOT NULL,
  PRIMARY KEY (`id`,`users_id`),
  KEY `fk_sales_users1_idx` (`users_id`),
  CONSTRAINT `fk_sales_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
INSERT INTO `sales` VALUES (1,NULL,NULL,NULL,1,8),(2,NULL,NULL,NULL,1,12),(3,NULL,NULL,NULL,1,16),(4,NULL,NULL,NULL,1,21),(5,NULL,NULL,NULL,1,6);
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `birthdate` date NOT NULL,
  `address` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `avatar` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(256) NOT NULL,
  `state` int NOT NULL DEFAULT '1',
  `users_roles_id` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `fk_users_users_roles1_idx` (`users_roles_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Pablo','Montenegro','1987-04-05','capital','pablo@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118715/images/avatars/1656639955313_img_ogh0vd.png','$2a$10$R9DCK9YJ69ccMYoiEBxJCuSVe0yXA5025NKkH1Ri4/AfaGsToafpG',1,0),(2,'Joaquin','Perez','1987-02-05','Calle 1234','djuncos@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118709/images/avatars/1656722012077_img_ozoip3.png','$2a$10$Xd3HSLS7aQ3hR2kujL4d9umbOTYdexHyks1foQN6FNLDGc9otVoNW',1,0),(3,'Alina','Moran','1979-01-07','Calle 123','alina.moran@outlook.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118708/images/avatars/1656727419217_img_cpcjdy.png','$2a$10$V7qHyVxdeW29rCQkJdNvXO.J3qqU9s4H222PVec5s67xDnJxLgwHe',1,1),(4,'Agostina','Moran','1998-08-05','Calle 123','ago@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118703/images/avatars/1656882514763_img_wjlbb1.png','$2a$10$u0C4pbqllWBcaqSln6dEZO.o4oFECLlAM62O59uDJ988LzcyXkYQ6',1,1),(5,'Carlos','Firpo','2000-08-01','Calle 123','carlos@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118703/images/avatars/1657592864859_img_mv6off.png','$2a$10$dk2rnhI3Lri8EFQ6U/GwSO5XqSJtjP7YjmcyQkt0WopOSuGV4bXQC',1,1),(6,'Martin','Marquez','2022-06-11','Calle 132 nro 465','lm.baladovidal@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118695/images/avatars/1658372130386_img_go66ld.png','$2a$10$TVJCD7qxfu6BT.4wFA4RzO0W3AQ5ZwlQsDDSPVnwkJUZJxtsNUU7K',1,1),(7,'Lizandro','Gomez','2022-06-19','Calle 132 nro 465','lgomez@joseguma.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118693/images/avatars/1656882465284_img_azulpp.png','$2a$10$dzGklV4lQSE5pp0pnLh/ru8EGt7R7g5cpcJU2sa7w50ats4c8yHdC',1,1),(8,'Nicolas','Menedez','1982-12-08','Independencia 717','nmenendez@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118693/images/avatars/1658372107488_img_z81eve.png','$2a$10$ZcmqP7cKwL5ROEZKlEDoxeu5vg2NC.fiWnXG1mx/NZ.Y8dm8c5Euq',1,1),(9,'Maria','Juarez','1982-01-01','Independencia 718','mjuarez@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118692/images/avatars/1658372239653_img_yz386a.png','$2a$10$E2AZEY1GlM0UgdsZD6wN0O3yqcdqGxA1Q1hF3Zf2yo.mgQ9cY8bsa',1,1),(10,'Hanna','Maradona','1982-01-01','Independencia 719','hanna@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118686/images/avatars/1656557793244_img_qjc9fh.png','$2a$10$7Vv/nDGWQsGh/z1fjiTSgOKjWFwUtk1MXrDlBdrCA.B17RdZ4m5p2',1,1),(11,'Julia','Perez','1979-01-07','Calle 123','julia@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118680/images/avatars/1656552131461_img_ztjzjn.png','$2a$10$7rPLkh83gIyxHT3LoIYW7O1SCdtmuYqvw6IdtJS2VDlTctWGkTvpC',0,1),(12,'Paula','Bosco','1985-03-26','Calle456','paulab@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118675/images/avatars/1656887926566_img_q9aqo1.png','$2a$10$U4VXzaCZBU2.R/OOyeZLZux5TdF0o8iJ2LsoQ7L2Txg81ooUiCnp6',0,1),(13,'Alba','Moron','1979-01-07','Padua','alba@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118673/images/avatars/default_img_wmlytg.png','$2a$10$lquF3AqMVHgfpulA/eELReTCFILjNrHfeUlZP3fyZL4WUBw.vQS0O',1,2),(14,'David','Juncos','1982-12-08','Cordoba','djuncos@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118669/images/avatars/1656638627819_img_m0wzn2.png','$2a$10$AoW0XgBteRWs2DNkFmPuOOqoKdINXknPyr4y8n8FMZgzYrbdF2v2e',1,2),(15,'Leandro','Balado Vidal','1980-06-05','Cordoba','leandrobv@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118666/images/avatars/1656882384413_img_mm6cbg.png','$2a$10$hiI4/QqsZJ/TtZMPo/iFWO4R/B9p6WROPGoP6vLxW4kokq7astYpy',1,2),(16,'Ara','Catalano','1985-03-26','Lacarra 565 - Piso 11','araceli@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118667/images/avatars/1656420199161_img_yryme1.png','$2a$10$luQ7ojFMXqCUV0Hpj10YnufqlCebKX6Y8uDZ0Pb7wKWFie0cYQag2',1,2),(17,'Ursula','Le Guin','1988-07-08','Calle Falsa 678','ursula@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118657/images/avatars/1656209374063_img_zllltx.png','$2a$10$.fE1PVDYkcVWukn02qDjqO8hwqX8NQzLSyqgiMpRNC1PJWJwv7ybe',0,1),(18,'Araceli','Catalano','1234-02-22','Lacarra 565','aracelicatalano@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118657/images/avatars/1656370492107_img_gqckls.png','$2a$10$YYEpg28ARlZDvYPHL6r5mO1v0oVF49A7A2pbrVvV0Js5Q7pzIjN0i',1,1),(19,'Jacinto','Perez','1999-07-07','Calle Falsa 123','jacinto.perez@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118657/images/avatars/1656372243004_img_fwcod3.png','$2a$10$PPM7DVJ9KJRSt6kBeix3f.I7piffhq/2RsV9b7GOuMOphW2pAwOnq',1,1),(20,'Paola','Ramirez','8888-08-08','Lacarra 565','aracepaola@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118673/images/avatars/default_img_wmlytg.png','$2a$10$E5HhaWZOiakP1dhCJwxznuU1ryZBsnfQxVCDAWy7UVpWIZXID6em6',1,1),(21,'Araceli','Catalano','2000-09-09','Lacarra 565','araceliadmin@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118675/images/avatars/1656887926566_img_q9aqo1.png','$2a$10$Ez5XmZzjkZYxnn2y4oqrqeqdaAKFGWgufrcyZYwvAYUSNahVzRwt6',0,2),(24,'Juliana','Otero','2009-09-09','Av de Mayo 125','juliana@mail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118673/images/avatars/default_img_wmlytg.png','$2a$10$qOlS.IJclJP5W8V.RC1MQemMcijBraPzZZlfvn3QoOnhBf9Cpke9a',1,1),(25,'Jacinto','Gonzalez','2009-09-09','Rivadavia 500','jacinto@aa.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118673/images/avatars/default_img_wmlytg.png','$2a$10$le5MVlm/ksbsVi66ZfXDsetRiIm1LRwsVmIzWnKZF0n2Qfw6wkJna',1,1),(26,'Araceli','Catalano','2000-09-09','Lacarra 565','catita@gmail.com','https://res.cloudinary.com/ds0upcco9/image/upload/v1659118667/images/avatars/1656420199161_img_yryme1.png','$2a$10$M01cGQFsy0ND67ITyAdKFu/CcRhJnUqSZGJaOXLGXXBv2vXMtGcJe',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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

-- Dump completed on 2022-07-31 20:10:14
