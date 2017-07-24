SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS  `account`;
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cardnum` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

DROP TABLE IF EXISTS  `gameinfo`;
CREATE TABLE `gameinfo` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `cardnum` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nummoney` int(11) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `month` int(11) DEFAULT NULL,
  `day` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

SET FOREIGN_KEY_CHECKS = 1;

