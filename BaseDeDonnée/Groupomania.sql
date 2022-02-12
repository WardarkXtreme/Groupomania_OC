-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
  `commentID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `publicationID` int NOT NULL,
  `commentText` varchar(100) NOT NULL,
  `createdOn` varchar(25) NOT NULL DEFAULT '0',
  `updateOn` varchar(25) NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`commentID`),
  UNIQUE KEY `commentID_UNIQUE` (`commentID`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (56,128,100,'MDR !','12-02-2022 à 12:14:13','0000-00-00 00:00:00'),(57,127,101,'ouaip, c\'est moi le boss ! 2+2=4 ;)','12-02-2022 à 12:14:13','0000-00-00 00:00:00'),(58,129,100,'le melon du type !','12-02-2022 à 12:14:13','0000-00-00 00:00:00'),(59,129,101,'non en Objet \"string\" 2+2=22','12-02-2022 à 12:14:13','0000-00-00 00:00:00'),(60,127,102,'Super !!!!','12-02-2022 à 12:14:13','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like`
--

DROP TABLE IF EXISTS `like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like` (
  `likeID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `publicationID` int NOT NULL,
  PRIMARY KEY (`likeID`),
  UNIQUE KEY `likeID_UNIQUE` (`likeID`)
) ENGINE=InnoDB AUTO_INCREMENT=204 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (197,127,100),(198,128,100),(199,127,101),(200,129,100),(201,129,101),(202,129,102),(203,127,102);
/*!40000 ALTER TABLE `like` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `publication`
--

DROP TABLE IF EXISTS `publication`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publication` (
  `publicationID` int NOT NULL AUTO_INCREMENT,
  `userID` int NOT NULL,
  `createdOn` varchar(21) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updateOn` varchar(21) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '0000-00-00 00:00:00',
  `title` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `article` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publicationPicture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `like` varchar(20) NOT NULL DEFAULT '0',
  PRIMARY KEY (`publicationID`),
  UNIQUE KEY `publicationID_UNIQUE` (`publicationID`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publication`
--

LOCK TABLES `publication` WRITE;
/*!40000 ALTER TABLE `publication` DISABLE KEYS */;
INSERT INTO `publication` VALUES (100,127,'12-02-2022 à 12:14:13','0000-00-00 00:00:00','Je suis le premier !','C\'est moi le boss, le premier à avoir publier !','http://localhost:3000/images/giphy.gif1644666155512.undefined','3'),(101,128,'12-02-2022 à 12:14:13','0000-00-00 00:00:00','Problème...','Quelqu\'un de bon en maths ici ??!','http://localhost:3000/images/giphy_(2).gif1644666274518.undefined','2'),(102,129,'12-02-2022 à 12:14:13','0000-00-00 00:00:00','Keep calm and love programming !','V2.0 du site Groupomania, fait !! enjoy !','http://localhost:3000/images/work.gif1644666725137.undefined','2');
/*!40000 ALTER TABLE `publication` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userID` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `firstName` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `lastName` varchar(75) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pseudo` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `createdOn` varchar(21) NOT NULL,
  `userAdmin` tinyint(1) NOT NULL DEFAULT '0',
  `userPic` varchar(255) DEFAULT NULL,
  `bio` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userID_UNIQUE` (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (126,'groupomania@gmail.com','Groupomania','Administrateur','Modo','$2b$10$W7Dvb12QLJ/tgpOyKCIq8eYYWsdT/ERlCdXmQukaRsv1wcM4Uz8OK','12-02-2022 à 12:14:13',1,'http://localhost:3000/images/11674789.jpg1644665898099.jpg',NULL),(127,'sebastien@gmail.com','lefranc','Sebastien','Seboush','$2b$10$qzIFN/3TMEHxYBfwlD1yJubyTIOC56/hYmhfFcEb/2JSwoBgpcQL2','12-02-2022 à 12:14:13',0,'http://localhost:3000/images/visage2.jpg1644665993954.jpg',NULL),(128,'faustine@gmail.com','Pounsiski','Faustine','PouPou','$2b$10$g5mJpAPxBEvGEvknsYQNMOS2uEHw1czDRdDr9vZNgiR952Az0YanC','12-02-2022 à 12:14:13',0,'http://localhost:3000/images/visage6.jpg1644666056010.jpg',NULL),(129,'pauline@gmail.com','Guimilo','Pauline','Pouka','$2b$10$KsW0Pla36gmVPd3g7gHisuAyHW00s5yFS90.G.SP87Jqk4dMSYfci','12-02-2022 à 12:14:13',0,'http://localhost:3000/images/visage3.jpg1644666434425.jpg',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-12 12:54:20
