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
  `password` varchar(250) DEFAULT NULL,
  `userroles_id` int DEFAULT '1',
  `recipes_users_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_userroles1_idx` (`userroles_id`),
  KEY `fk_users_recipes_users1_idx` (`recipes_users_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (50,'Pablo','Montenegro','1987-04-05','capital','pablo@mail.com','default.png','$2a$10$R9DCK9YJ69ccMYoiEBxJCuSVe0yXA5025NKkH1Ri4/AfaGsToafpG',0,0),(51,'David','Juncos','1987-02-05','cordoba','djuncos@mail.com','default.png','$2a$10$Xd3HSLS7aQ3hR2kujL4d9umbOTYdexHyks1foQN6FNLDGc9otVoNW',0,0),(52,'Alba','Moran','1979-01-07','Padua','alba.moran@outlook.com','1656207727262_img.png','$2a$10$V7qHyVxdeW29rCQkJdNvXO.J3qqU9s4H222PVec5s67xDnJxLgwHe',1,NULL),(54,'Agostina','Moran','1998-08-05','santa fe','ago@mail.com','1656280097965_img.png','$2a$10$u0C4pbqllWBcaqSln6dEZO.o4oFECLlAM62O59uDJ988LzcyXkYQ6',2,NULL),(55,'carlos@mail.com','Firpo','2000-08-01','San Isidro','carlos@mail.com','1656339535904_img.png','$2a$10$dk2rnhI3Lri8EFQ6U/GwSO5XqSJtjP7YjmcyQkt0WopOSuGV4bXQC',1,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
