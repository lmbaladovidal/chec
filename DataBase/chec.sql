-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Chec
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Chec
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Chec` DEFAULT CHARACTER SET utf8 ;
USE `Chec` ;

-- -----------------------------------------------------
-- Table `Chec`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chec`.`Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `dateOfBirth` DATE NOT NULL,
  `address` VARCHAR(60) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `userRole` VARCHAR(45) NOT NULL,
  `userImage` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chec`.`Recetas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chec`.`Recetas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `volume` DECIMAL(6,2) NULL,
  `boilvolume` DECIMAL(6,2) NULL,
  `alcohol` DECIMAL(6,2) NULL,
  `targetFG` DECIMAL(6,2) NULL,
  `targetOG` DECIMAL(6,2) NULL,
  `initialPH` DOUBLE NULL,
  `finalPH` DOUBLE NULL,
  `mashTemp` DECIMAL(6,2) NULL,
  `mashTime` DECIMAL(6,2) NULL,
  `boilTime` DECIMAL(6,2) NULL,
  `fermentationTemp` DECIMAL(6,2) NULL,
  `malt1` VARCHAR(45) NULL,
  `malt1Amount` DECIMAL(6,2) NULL,
  `malt2` VARCHAR(45) NULL,
  `malt2Amount` DECIMAL(6,2) NULL,
  `malt3` VARCHAR(45) NULL,
  `malt3Amount` DECIMAL(6,2) NULL,
  `hop1` VARCHAR(45) NULL,
  `hop1Amount` DECIMAL(6,2) NULL,
  `hop1Moment` VARCHAR(45) NULL,
  `hop2` VARCHAR(45) NULL,
  `hop2Amount` DECIMAL(6,2) NULL,
  `hop2Moment` VARCHAR(45) NULL,
  `hop3` VARCHAR(45) NULL,
  `hop3Amount` DECIMAL(6,2) NULL,
  `hop3Moment` VARCHAR(45) NULL,
  `yeast` VARCHAR(45) NULL,
  `yeastAmount` DECIMAL(6,2) NULL,
  `brewerTip` VARCHAR(100) NULL,
  `foodPairing` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chec`.`Products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chec`.`Products` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL,
  `description` VARCHAR(45) NULL,
  `price` DECIMAL(6,2) NULL,
  `bitterness` INT NULL,
  `color` INT NULL,
  `alcohol` DECIMAL(6,2) NULL,
  `body` VARCHAR(45) NULL,
  `carbonation` VARCHAR(45) NULL,
  `hop` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  `category` VARCHAR(45) NULL,
  `idRecetas` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_Products_Recetas1_idx` (`idRecetas` ASC) VISIBLE,
  CONSTRAINT `fk_Products_Recetas1`
    FOREIGN KEY (`idRecetas`)
    REFERENCES `Chec`.`Recetas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Chec`.`CarroDeCompras`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Chec`.`CarroDeCompras` (
  `Users_id` INT NOT NULL,
  `Products_id` INT NOT NULL,
  `cantidad` INT NULL,
  `price` DECIMAL(6,2) NULL,
  `Descuento` DECIMAL(6,2) NULL,
  `CostoEnvio` DECIMAL(6,2) NULL,
  `Total` DECIMAL(18,2) NULL,
  PRIMARY KEY (`Users_id`, `Products_id`),
  INDEX `fk_Users_has_Products_Products1_idx` (`Products_id` ASC) VISIBLE,
  INDEX `fk_Users_has_Products_Users_idx` (`Users_id` ASC) VISIBLE,
  CONSTRAINT `fk_Users_has_Products_Users`
    FOREIGN KEY (`Users_id`)
    REFERENCES `Chec`.`Users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Users_has_Products_Products1`
    FOREIGN KEY (`Products_id`)
    REFERENCES `Chec`.`Products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
detailsales