/*
  Warnings:

  - You are about to alter the column `height` on the `user` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `exercise` MODIFY `sug-series` VARCHAR(191) NOT NULL DEFAULT '3';

-- AlterTable
ALTER TABLE `user` MODIFY `height` DOUBLE NOT NULL;
