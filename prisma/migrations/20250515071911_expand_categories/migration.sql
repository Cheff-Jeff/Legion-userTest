/*
  Warnings:

  - You are about to drop the column `parentId` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `parentId`;

-- CreateTable
CREATE TABLE `CategoryTree` (
    `ancestorId` INTEGER NOT NULL,
    `descendantId` INTEGER NOT NULL,

    PRIMARY KEY (`ancestorId`, `descendantId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CategoryTree` ADD CONSTRAINT `CategoryTree_ancestorId_fkey` FOREIGN KEY (`ancestorId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CategoryTree` ADD CONSTRAINT `CategoryTree_descendantId_fkey` FOREIGN KEY (`descendantId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
