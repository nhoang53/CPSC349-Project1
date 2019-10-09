-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 08, 2019 at 01:19 AM
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
  `userRole` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `username` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `firstName` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `lastName` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
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

INSERT INTO `user` (`id`, `userRole`, `username`, `firstName`, `lastName`, `email`, `password`, `location`, `love`, `do`, `userLink`, `photo`) VALUES
(1, 'admin user', 'admin', 'first', 'burden', 'test@yahoo.com', '123456', 'Fullerton, CA', 'Photography, Technology, Design', 'Project Manager, Software Developer, Father', NULL, ''),
(2, 'manager user', 'manager', 'second', 'burden', 'test2@yahoo.com', '123456', '', 'Badminton, Coding', 'Front end development, Web design, Student', NULL, ''),
(3, 'customer user', 'test', 'thirsd', 'burden', 'test3@yahoo.com', '123456', '', 'coding', 'web design', NULL, ''),
(4, 'customer user', 'Amazing', 'John', 'Bouhon', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(5, 'customer user', 'Amazing', 'John', 'Bouhon', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg'),
(6, 'customer user', 'Amazing', 'John', 'Bouhon', 'testing@php.com', '123456', 'Fullerton', 'badminton pool table', 'front end web development', 'youtube.com', 'img/123.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `user_backup`
--

CREATE TABLE `user_backup` (
  `id` int(11) NOT NULL DEFAULT 0,
  `userRole` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `username` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `firstName` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `lastName` varchar(30) COLLATE utf8_vietnamese_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `location` varchar(50) COLLATE utf8_vietnamese_ci NOT NULL,
  `love` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `do` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL,
  `userLink` varchar(50) COLLATE utf8_vietnamese_ci DEFAULT NULL,
  `photo` varchar(100) COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_vietnamese_ci;

--
-- Dumping data for table `user_backup`
--

INSERT INTO `user_backup` (`id`, `userRole`, `username`, `firstName`, `lastName`, `email`, `password`, `location`, `love`, `do`, `userLink`, `photo`) VALUES
(1, 'admin user', 'admin', 'first', 'burden', 'test@yahoo.com', '123456', 'Fullerton, CA', 'Photography, Technology, Design', 'Project Manager, Software Developer, Father', NULL, ''),
(2, 'manager user', 'manager', 'second', 'burden', 'test2@yahoo.com', '123456', '', 'Badminton, Coding', 'Front end development, Web design, Student', NULL, ''),
(3, 'customer user', 'test', 'thirsd', 'burden', 'test3@yahoo.com', '123456', '', 'coding', 'web design', NULL, '');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
