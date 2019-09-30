-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 30, 2019 at 06:05 AM
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
-- Database: `login`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idUsers` int(11) NOT NULL,
  `firstUsers` tinytext NOT NULL,
  `lastUsers` tinytext NOT NULL,
  `uidUsers` tinytext NOT NULL,
  `emailUsers` tinytext NOT NULL,
  `pwdUsers` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idUsers`, `firstUsers`, `lastUsers`, `uidUsers`, `emailUsers`, `pwdUsers`) VALUES
(1, 'DENNIS', 'KIEU', 'daikieu123', 'kieucongdai@yahoo.com', '$2y$10$emXEsLFpaESkQw5ZwPAiN.nscYxz3o6flGwyaPwq5T/MDjZP5KKsS'),
(2, 'dai', 'kieu', 'hahaha456', 'haha@gmail.com', '$2y$10$dW41WzDiQcJ.SF7XBuLi2u6rm5H1uB2WDgixnqiZ43CIp1salcoH2'),
(3, 'test', 'hehe', 'student', 'student@evil.com', '$2y$10$5uj0AkMOZCxNBePm8hy0Me7xNDxG1hLV/H/vKwZP52E6mmxTFkz8O'),
(4, 'bao', 'kieu', 'sheep', 'sheep@gmail.com', '$2y$10$ZxMXIFgLU5kcz.DvQa3e4.bCrm6LSPrzcHwTmsgFBUQeGhe3zNZ2.'),
(5, 'john', 'cena', 'john', 'john@yahoo.com', '$2y$10$8vNkADnCPQgHDX82JGyZMu0KRw6xlZAxGOhzmHL20M0ApvdFDuMJO'),
(6, 'DENNIS', 'KIEU', 'denniskieu', 'kieucongdai@gmail.com', '$2y$10$FXCKoZnRIzti3bV5eegMc.zV8AoKWAqCQ/LrfVkMZENwcxFszo.EC');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUsers`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idUsers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
