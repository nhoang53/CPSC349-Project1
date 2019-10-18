-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2019 at 11:29 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project1`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `firstName` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `lastName` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `premiumUser` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `location` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `love` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `do` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `userLink` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `photo` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `firstName`, `lastName`, `premiumUser`, `email`, `password`, `location`, `love`, `do`, `userLink`, `photo`) VALUES
(1, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(2, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(3, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(4, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(7, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(8, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(9, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(11, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(12, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(13, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(14, 'amazon', 'John', 'Bouhon', 'yes', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
