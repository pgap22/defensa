-- CreateTable
CREATE TABLE `animal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre_mascota` VARCHAR(191) NOT NULL,
    `raza` VARCHAR(191) NOT NULL,
    `genero` BOOLEAN NOT NULL,
    `peso` VARCHAR(191) NOT NULL,
    `imagen` VARCHAR(191) NOT NULL,
    `fecha_nacimiento` DATETIME(3) NOT NULL,
    `rociado` BOOLEAN NOT NULL,
    `esterelizado` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
