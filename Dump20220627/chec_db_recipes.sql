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
  `recipes_users_id` int NOT NULL,
  PRIMARY KEY (`id`,`recipes_users_id`),
  KEY `fk_recipes_recipes_users1_idx` (`recipes_users_id`),
  CONSTRAINT `fk_recipes_recipes_users1` FOREIGN KEY (`recipes_users_id`) REFERENCES `recipes_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recipes`
--

LOCK TABLES `recipes` WRITE;
/*!40000 ALTER TABLE `recipes` DISABLE KEYS */;
INSERT INTO `recipes` VALUES (1,'Golden Ale',55.00,60.00,4.50,1008.00,1050.00,5,4,64.00,60.00,60.00,18.00,'Pilsen',14.00,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth',NULL,NULL,NULL,NULL,NULL,NULL,'S05',0.70,'Una vez alcanzada la densidad final, agregar 8 grs. por litro de gelatina sin sabor para lograr una cerveza más clara.','Pizza y cerveza siempre van de la mano. También podés probar combinarla con bombas de papa.',0),(2,'IPA',55.00,60.00,5.00,1010.00,1055.00,5,4,64.00,67.00,75.00,18.00,'Pilsen',13.50,'Trigo',1.50,'Biscuit',0.80,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth','Citra',30.00,'Hop stand','Centennial',25.00,'Hop stand','S05',0.70,'Enfriar el mosto a 80° para el hop stand por 30 min.','Pollo asado. Bondiola braseada.',0),(3,'Honey',55.00,60.00,4.50,1008.00,1050.00,5,4,64.00,60.00,60.00,18.00,'Pilsen',14.00,'Miel',0.50,NULL,NULL,NULL,NULL,NULL,NULL,'Cascade',5.00,'First worth',NULL,NULL,NULL,NULL,NULL,NULL,'S05',0.70,'Agregar los 500 grs de miel en final de fermentación.','Pizza.',0),(4,'Irish Red',55.00,60.00,6.00,1012.00,1060.00,5,4,65.00,60.00,90.00,18.00,'Pilsen',12.00,'Biscuit',1.00,'Caramelo 60',0.80,'Caramelo 120',0.40,'Chocolate',0.40,'Cascade',5.00,'First worth','Chinook',15.00,'Minuto 10',NULL,NULL,NULL,'S05',0.70,'Una vez terminado el macerado, llevar a 72° para un mash out de 15 minutos.','A COMPLETAR.',0);
/*!40000 ALTER TABLE `recipes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-27 11:22:12
