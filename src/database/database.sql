-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lavieDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lavieDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lavieDB` DEFAULT CHARACTER SET utf8 ;
USE `lavieDB` ;

-- -----------------------------------------------------
-- Table `lavieDB`.`psicologo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavieDB`.`psicologo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `apresentacao` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavieDB`.`paciente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavieDB`.`paciente` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `idade` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavieDB`.`atendimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavieDB`.`atendimento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data_atendimento` DATE NOT NULL,
  `obs` VARCHAR(255) NOT NULL,
  `psicologo_id` INT NOT NULL,
  `paciente_id` INT NOT NULL,
  PRIMARY KEY (`id`, `psicologo_id`, `paciente_id`),
  INDEX `fk_atendimento_psicologo_idx` (`psicologo_id` ASC) VISIBLE,
  INDEX `fk_atendimento_paciente1_idx` (`paciente_id` ASC) VISIBLE,
  CONSTRAINT `fk_atendimento_psicologo`
    FOREIGN KEY (`psicologo_id`)
    REFERENCES `lavieDB`.`psicologo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_atendimento_paciente1`
    FOREIGN KEY (`paciente_id`)
    REFERENCES `lavieDB`.`paciente` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
