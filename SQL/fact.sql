CREATE TABLE `symply`.`facts` (
  `id` VARCHAR(100) NOT NULL,
  `text` VARCHAR(256) NOT NULL,
  `date_added` DATETIME NULL DEFAULT NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
