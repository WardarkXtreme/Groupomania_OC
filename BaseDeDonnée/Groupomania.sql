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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (62,142,107,'super, mes félicitations !!','13-02-2022 à 16:44:23','0000-00-00 00:00:00'),(63,143,107,'ça se fête !','13-02-2022 à 17:02:44','0000-00-00 00:00:00'),(64,143,108,'Carrément, j\'arrive ! ','13-02-2022 à 17:02:44','0000-00-00 00:00:00');
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
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like`
--

LOCK TABLES `like` WRITE;
/*!40000 ALTER TABLE `like` DISABLE KEYS */;
INSERT INTO `like` VALUES (207,141,107),(208,142,107),(209,142,108),(210,143,107),(211,143,108),(212,143,109);
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
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publication`
--

LOCK TABLES `publication` WRITE;
/*!40000 ALTER TABLE `publication` DISABLE KEYS */;
INSERT INTO `publication` VALUES (107,141,'13-02-2022 à 16:44:23','0000-00-00 00:00:00','Salut tout le monde ✌','je viens d\'être embauchée, haha !','http://localhost:3000/images/work.gif1644767853566.undefined','3'),(108,142,'13-02-2022 à 16:44:23','0000-00-00 00:00:00','heure de café','Oui, il est grand temp de boire un café, qui est chaud ??? ','http://localhost:3000/images/coffee.gif1644768027527.undefined','2'),(109,143,'13-02-2022 à 17:02:44','0000-00-00 00:00:00','problème','Qui est bon en maths ici please ????','http://localhost:3000/images/giphy_(2).gif1644768239290.undefined','1');
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
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (131,'groupomania@gmail.com','Groupomania','Admin','Modo','$2b$10$MQqtgKhlIwtd/vty2RVI7OPj.38bMbTFHifqAUU/77KFAU/LfQQAG','13-02-2022 à 16:27:47',1,'http://localhost:3000/images/11674789.jpg1644766116135.jpg',NULL),(141,'faustine@gmail.com','namoli','Faustine','Faufau','$2b$10$dSQj64nrMlah4ggBcbIRrObhqqlOWPdLEQOX3A663751gOwN1Hukq','13-02-2022 à 16:44:23',0,'http://localhost:3000/images/visage6.jpg1644767761797.jpg',NULL),(142,'sebastien@gmail.com','Denime','Sebastien','Seboush','$2b$10$uqSbvSWgtrenmIGkCFo7lOvtj0DmZnks73q7ECaau.e7js5vNYGgq','13-02-2022 à 16:44:23',0,'http://localhost:3000/images/visage51515.jpg1644767931764.jpg',NULL),(143,'pauline@gmail.com','Jean','Pauline','Popo','$2b$10$F5r5RQrmJ3QHtNex8O68ZuEIA9x.z5CFQQm4wUJNWnOM6UF6Zhje6','13-02-2022 à 16:44:23',0,'http://localhost:3000/images/visage3.jpg1644768090825.jpg',NULL);
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

-- Dump completed on 2022-02-13 17:05:29
