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
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,'IPA','Cerveza rubia amarga con aromas herbales que aportan sus lúpulos cascade y chinok',250.00,40,9,5.20,'liviano','media/carbonation','Cascade','honey.png','Estándar',50,0),(4,'STOUT','Cerveza negra con notas a café y chocolate levemente lupulada y moderada en alcohol.',250.00,15,32,7.50,'pesado','media','Cascade','stout.png','Estándar',50,0),(5,'GOLDEN','Cerveza rubia, refrescante fácil y de tomar por su balance y bajo amargor.',300.00,7,5,5.00,'liviano','media','Cascade','golden.png','Estándar',50,0),(6,'HONEY','Cerveza rubia de alto dulzor con notas de sabor a miel.',200.00,7,5,5.00,'liviano','media','Cascade','beer-1652058782427.png','Estándar',50,0),(7,'IRISH RED ALE','Cerveza roja acaramelada con notas maltosas y bajo amargor.',300.00,10,26,6.50,'medio','media/baja','Cascade','beer-1652058793037.png','Estándar',50,0),(8,'IRISH RED ALE','Cerveza roja acaramelada con notas maltosas y bajo amargor.',300.00,10,26,6.50,'medio','media/baja','Cascade','beer-1652058793037.png','Estándar',50,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-27 11:22:13
