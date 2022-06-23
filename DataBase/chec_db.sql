CREATE DATABASE  IF NOT EXISTS `chec_db` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
-- Table structure for table `detailsales`
--

DROP TABLE IF EXISTS `detailsales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detailsales` (
  `id` int NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL,
  `Sales_id` int NOT NULL,
  `Sales_Users_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_detailSales_Sales1_idx` (`Sales_id`,`Sales_Users_id`),
  CONSTRAINT `fk_detailSales_Sales1` FOREIGN KEY (`Sales_id`, `Sales_Users_id`) REFERENCES `sales` (`id`, `Users_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detailsales`
--

LOCK TABLES `detailsales` WRITE;
/*!40000 ALTER TABLE `detailsales` DISABLE KEYS */;
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
  `name` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `bitterness` int NOT NULL,
  `color` int NOT NULL,
  `alcohol` decimal(6,2) NOT NULL,
  `body` varchar(45) NOT NULL,
  `carbonation` varchar(45) NOT NULL,
  `hop` varchar(45) NOT NULL,
  `image` varchar(45) NOT NULL DEFAULT 'Design/540x540.png',
  `category` varchar(45) NOT NULL,
  `stock` int NOT NULL,
  `discount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'IPA','Cerveza rubia amarga con aromas herbales que aportan sus lúpulos cascade y chinok',250.00,40,9,5.20,'liviano','media/carbonation','Cascade','honey.png','Estándar',50,0),(4,'STOUT','Cerveza negra con notas a café y chocolate levemente lupulada y moderada en alcohol.',250.00,15,32,7.50,'pesado','media','Cascade','stout.png','Estándar',50,0),(5,'GOLDEN','Cerveza rubia, refrescante fácil y de tomar por su balance y bajo amargor.',300.00,7,5,5.00,'liviano','media','Cascade','golden.png','Estándar',50,0),(6,'HONEY','Cerveza rubia de alto dulzor con notas de sabor a miel.',200.00,7,5,5.00,'liviano','media','Cascade','beer-1652058782427.png','Estándar',50,0),(7,'IRISH RED ALE','Cerveza roja acaramelada con notas maltosas y bajo amargor.',300.00,10,26,6.50,'medio','media/baja','Cascade','beer-1652058793037.png','Estándar',50,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_sales`
--

DROP TABLE IF EXISTS `products_has_sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_has_sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Products_id` int NOT NULL,
  `detailSales_id` int NOT NULL,
  PRIMARY KEY (`id`,`Products_id`,`detailSales_id`),
  KEY `fk_Products_has_Sales_Products1_idx` (`Products_id`),
  KEY `fk_Products_has_Sales_detailSales1_idx` (`detailSales_id`),
  CONSTRAINT `fk_Products_has_Sales_detailSales1` FOREIGN KEY (`detailSales_id`) REFERENCES `detailsales` (`id`),
  CONSTRAINT `fk_Products_has_Sales_Products1` FOREIGN KEY (`Products_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_sales`
--

LOCK TABLES `products_has_sales` WRITE;
/*!40000 ALTER TABLE `products_has_sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_has_sales` ENABLE KEYS */;
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
  `initialPH` double NOT NULL,
  `finalPH` double NOT NULL,
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
  `brewerTip` varchar(100) NOT NULL,
  `foodPairing` varchar(100) NOT NULL,
  `users_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `shippingCost` decimal(6,2) NOT NULL,
  `discount` int DEFAULT NULL,
  `total` decimal(6,2) NOT NULL,
  `Users_id` int NOT NULL,
  PRIMARY KEY (`id`,`Users_id`),
  KEY `fk_Sales_Users1_idx` (`Users_id`),
  CONSTRAINT `fk_Sales_Users1` FOREIGN KEY (`Users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sales`
--

LOCK TABLES `sales` WRITE;
/*!40000 ALTER TABLE `sales` DISABLE KEYS */;
/*!40000 ALTER TABLE `sales` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart`
--

DROP TABLE IF EXISTS `shoppingcart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppingcart` (
  `id_Cart` int NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `price` decimal(6,2) NOT NULL,
  `discount` decimal(6,2) DEFAULT NULL,
  `shippingCost` int NOT NULL,
  `total` decimal(18,2) NOT NULL,
  `sold` int NOT NULL DEFAULT '0',
  `Users_id` int NOT NULL,
  PRIMARY KEY (`id_Cart`),
  KEY `fk_ShoppingCart_Users1_idx` (`Users_id`),
  CONSTRAINT `fk_ShoppingCart_Users` FOREIGN KEY (`Users_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart`
--

LOCK TABLES `shoppingcart` WRITE;
/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shoppingcart_products`
--

DROP TABLE IF EXISTS `shoppingcart_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shoppingcart_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Products_id` int NOT NULL,
  `ShoppingCart_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ShoppingCart_Products_Products1_idx` (`Products_id`),
  KEY `fk_ShoppingCart_Products_ShoppingCart1_idx` (`ShoppingCart_id`),
  CONSTRAINT `fk_ShoppingCart_Products_Products1` FOREIGN KEY (`Products_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_ShoppingCart_Products_ShoppingCart1` FOREIGN KEY (`ShoppingCart_id`) REFERENCES `shoppingcart` (`id_Cart`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shoppingcart_products`
--

LOCK TABLES `shoppingcart_products` WRITE;
/*!40000 ALTER TABLE `shoppingcart_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `shoppingcart_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userroles`
--

DROP TABLE IF EXISTS `userroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userroles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roleName` varchar(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userroles`
--

LOCK TABLES `userroles` WRITE;
/*!40000 ALTER TABLE `userroles` DISABLE KEYS */;
INSERT INTO `userroles` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `userroles` ENABLE KEYS */;
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
  `lastName` varchar(45) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `address` varchar(60) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `avatar` varchar(45) DEFAULT 'images/avatar/default.png',
  `userroles_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Users_UserRoles1_idx` (`userroles_id`) /*!80000 INVISIBLE */
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Walter','Rod','1960-12-11','buenos aires','walter@mail.com','images/avatar/default.png',1),(20,'Maria','firulais','1996-08-04','argentina','mfirulais@mail.com','default.png',1),(21,'Araceli','Catalano','1985-03-26','Lanús','aracelicatalan@gmail.com','default.png',2),(22,'Alba','Moran','1979-01-07','Ituzaingo','alba.morann@gmail.com','default.png',2),(23,'Leandro','Balado Vidal','1990-05-03','Cordoba','lm.baladovidal@gmail.com','default.png',2),(24,'David','Juncos','1980-05-05','Cordoba','davidjuncos@hotmail.com','default.png',2),(25,'David','Avalos','1980-05-05','Cordoba','avalos@hotmail.com','default.png',1),(26,'David','Avalos','1980-05-05','Cordoba','avalos@hotmail.com','default.png',1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'chec_db'
--

--
-- Dumping routines for database 'chec_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22 23:14:53
