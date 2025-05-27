-- CreateTable
CREATE TABLE `Util` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `commitData` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Util_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Block` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coreScript` VARCHAR(191) NULL,
    `css` VARCHAR(191) NOT NULL,
    `pending` BOOLEAN NOT NULL DEFAULT true,
    `blockShortName` VARCHAR(191) NOT NULL,
    `blockHtml` VARCHAR(191) NOT NULL,
    `translatedCode` VARCHAR(191) NULL,
    `scriptName` VARCHAR(191) NULL,
    `headingFont` VARCHAR(191) NULL,
    `bodyFont` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
