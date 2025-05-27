-- AlterTable
ALTER TABLE `Block` ADD COLUMN `cssUrl` VARCHAR(191) NULL,
    ADD COLUMN `repositoryName` VARCHAR(191) NULL,
    ADD COLUMN `repositoryUrl` VARCHAR(191) NULL,
    ADD COLUMN `scriptUrl` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `parentId` INTEGER NULL,

    UNIQUE INDEX `Category_category_key`(`category`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tag` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Tag_tag_key`(`tag`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CategoriesOnBlocks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blockId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TagsOnBlocks` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blockId` INTEGER NULL,
    `tagId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategoriesOnBlocks` ADD CONSTRAINT `CategoriesOnBlocks_blockId_fkey` FOREIGN KEY (`blockId`) REFERENCES `Block`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoriesOnBlocks` ADD CONSTRAINT `CategoriesOnBlocks_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnBlocks` ADD CONSTRAINT `TagsOnBlocks_blockId_fkey` FOREIGN KEY (`blockId`) REFERENCES `Block`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TagsOnBlocks` ADD CONSTRAINT `TagsOnBlocks_tagId_fkey` FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
