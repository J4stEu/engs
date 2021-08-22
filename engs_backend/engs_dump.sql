-- MySQL dump 10.13  Distrib 5.7.31, for Win64 (x86_64)
--
-- Host: localhost    Database: engs
-- ------------------------------------------------------
-- Server version	5.7.31-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('4c0ee633f92f');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `src` text NOT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'Английская школа','shared_assets/backend_assets/files/english_school.ppt','2020-08-24 03:32:14'),(2,'Наши учителя','shared_assets/backend_assets/files/teachers_in_our_school.ppt','2020-08-24 03:32:14'),(3,'Курс \"Elementary\"','shared_assets/backend_assets/files/elementary.ppt','2020-08-24 03:32:14'),(4,'Больше английского','/shared_assets/backend_assets/files/more_english.ppt','2020-08-24 03:32:14');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gallery`
--

DROP TABLE IF EXISTS `gallery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `preview_src` text NOT NULL,
  `src` text NOT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gallery`
--

LOCK TABLES `gallery` WRITE;
/*!40000 ALTER TABLE `gallery` DISABLE KEYS */;
INSERT INTO `gallery` VALUES (1,'shared_assets/backend_assets/gallery/preview/img1.jpg','shared_assets/backend_assets/gallery/view/img1.jpg','2020-08-23 02:22:39'),(2,'shared_assets/backend_assets/gallery/preview/img2.jpg','shared_assets/backend_assets/gallery/view/img2.jpg','2020-08-23 02:22:39'),(3,'shared_assets/backend_assets/gallery/preview/img3.jpg','shared_assets/backend_assets/gallery/view/img3.jpg','2020-08-23 02:22:39'),(4,'shared_assets/backend_assets/gallery/preview/img4.jpg','shared_assets/backend_assets/gallery/view/img4.jpg','2020-08-23 02:22:39'),(5,'shared_assets/backend_assets/gallery/preview/img5.jpg','shared_assets/backend_assets/gallery/view/img5.jpg','2020-08-23 02:22:39'),(6,'shared_assets/backend_assets/gallery/preview/img6.jpg','shared_assets/backend_assets/gallery/view/img6.jpg','2020-08-23 02:22:39'),(7,'shared_assets/backend_assets/gallery/preview/img7.jpg','shared_assets/backend_assets/gallery/view/img7.jpg','2020-08-23 02:22:39'),(8,'shared_assets/backend_assets/gallery/preview/img8.jpg','shared_assets/backend_assets/gallery/view/img8.jpg','2020-08-23 02:22:39'),(9,'shared_assets/backend_assets/gallery/preview/img9.jpg','shared_assets/backend_assets/gallery/view/img9.jpg','2020-08-23 02:22:39'),(10,'shared_assets/backend_assets/gallery/preview/img10.jpg','shared_assets/backend_assets/gallery/view/img10.jpg','2020-08-23 02:22:39'),(11,'shared_assets/backend_assets/gallery/preview/img11.jpg','shared_assets/backend_assets/gallery/view/img11.jpg','2020-08-23 02:22:39'),(12,'shared_assets/backend_assets/gallery/preview/img12.jpg','shared_assets/backend_assets/gallery/view/img12.jpg','2020-08-23 02:22:39');
/*!40000 ALTER TABLE `gallery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(140) NOT NULL,
  `text` text NOT NULL,
  `created` datetime DEFAULT NULL,
  `img` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
INSERT INTO `news` VALUES (1,'First post title!','First post text.','2020-08-13 05:16:50',NULL),(2,'My new title!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque odit debitis aliquam itaque reprehenderit, mollitia libero animi nobis corrupti iste ab ullam a possimus ea excepturi assumenda quibusdam accusamus?','2020-08-18 01:55:08',NULL),(3,'Hello from title!','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum molestiae nesciunt eaque nisi aliquam similique! Accusantium maiores aut totam aliquid, quod, ab saepe a ipsam fuga dolorum, laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?   in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?','2020-08-18 01:55:08',NULL),(4,'Hello from new title!','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum molestiae nesciunt eaque nisi aliquam similique! Accusantium maiores aut totam aliquid, quod, ab saepe a ipsam fuga dolorum, laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?   in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?','2020-08-18 01:55:08',NULL),(5,'My new hello from title!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque odit debitis aliquam itaque reprehenderit, mollitia libero animi nobis corrupti iste ab ullam a possimus ea excepturi assumenda quibusdam accusamus?','2020-08-18 01:55:08',NULL),(6,'My new hello from new title!','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum molestiae nesciunt eaque nisi aliquam similique! Accusantium maiores aut totam aliquid, quod, ab saepe a ipsam fuga dolorum, laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?   in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?','2020-08-18 01:55:08',NULL),(7,'My title 2!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque odit debitis aliquam itaque reprehenderit, mollitia libero animi nobis corrupti iste ab ullam a possimus ea excepturi assumenda quibusdam accusamus?','2020-08-18 01:55:08',NULL),(8,'My new title 2!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque odit debitis aliquam itaque reprehenderit, mollitia libero animi nobis corrupti iste ab ullam a possimus ea excepturi assumenda quibusdam accusamus?','2020-08-18 01:55:08',NULL),(9,'Hello from title 2!','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum molestiae nesciunt eaque nisi aliquam similique! Accusantium maiores aut totam aliquid, quod, ab saepe a ipsam fuga dolorum, laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?laborum in optio?   in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?   in optio?laborum in optio?  in optio?laborum in optio? in optio?laborum in optio?','2020-08-18 01:55:08',NULL),(10,'Hello from new title!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel neque odit debitis aliquam itaque reprehenderit, mollitia libero animi nobis corrupti iste ab ullam a possimus ea excepturi assumenda quibusdam accusamus?','2020-08-18 01:55:08',NULL),(11,'Post with news info!','<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia numquam deleniti, odio fugit expedita architecto! Officia, quisquam ab, aliquid pariatur ea cupiditate corrupti delectus quasi facere sit, nihil suscipit provident!</p>','2020-08-30 16:21:24','/shared_assets/backend_assets/post_img/post_img1.jpg');
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proverbs`
--

DROP TABLE IF EXISTS `proverbs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proverbs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proverbs`
--

LOCK TABLES `proverbs` WRITE;
/*!40000 ALTER TABLE `proverbs` DISABLE KEYS */;
INSERT INTO `proverbs` VALUES (1,'Better than a thousand days of diligent study is one day with a great teacher','2020-08-30 18:41:54'),(2,'One may study calligraphy at eighty','2020-08-30 18:41:54'),(3,'Work the fields on a fine day, study on a rainy day','2020-08-30 18:41:54'),(4,'A single conversation across the table with a wise man is worth a month\'s study of books','2020-08-30 18:41:54'),(5,'To stop drinking, study a drunkard when you are sober','2020-08-30 18:41:54');
/*!40000 ALTER TABLE `proverbs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-06 17:41:13
