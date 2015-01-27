
-- Servidor: localhost
-- Tiempo de generación: 14-11-2014 a las 15:36:28
-- Versión del servidor: 5.5.37
-- Versión de PHP: 5.4.4-14+deb7u14
SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
--
-- Base de datos: `aysiaysi`
--
CREATE DATABASE `arcdb` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `arcdb`;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `lecturas`
--
CREATE TABLE IF NOT EXISTS `lecturas` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`lectura` varchar(10) NOT NULL,
`fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=3236 ;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `potenciometro`
--
CREATE TABLE IF NOT EXISTS `potenciometro` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`potenciometro` varchar(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
`fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=222 ;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
