-- CreateTable
CREATE TABLE `Deportista` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `correo` VARCHAR(191) NOT NULL,
    `edad` INTEGER NOT NULL,
    `pais` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modalidad` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RegistroModalidad` (
    `modalidadId` INTEGER NOT NULL,
    `deportistaId` INTEGER NOT NULL,

    PRIMARY KEY (`modalidadId`, `deportistaId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RegistroModalidad` ADD CONSTRAINT `RegistroModalidad_modalidadId_fkey` FOREIGN KEY (`modalidadId`) REFERENCES `Modalidad`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RegistroModalidad` ADD CONSTRAINT `RegistroModalidad_deportistaId_fkey` FOREIGN KEY (`deportistaId`) REFERENCES `Deportista`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
