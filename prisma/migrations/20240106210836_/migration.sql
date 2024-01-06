/*
  Warnings:

  - You are about to alter the column `sug-series` on the `exercise` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `exercise` MODIFY `sug-series` INTEGER NOT NULL DEFAULT 3;
