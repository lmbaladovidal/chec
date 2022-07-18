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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `image` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
  `avatar` varchar(45) NOT NULL,
  `password` varchar(256) NOT NULL,
  `state` int NOT NULL DEFAULT '1',
  `users_roles_id` int NOT NULL DEFAULT '1',
  `recipes_users_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_users_roles1_idx` (`users_roles_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-03 19:05:21
