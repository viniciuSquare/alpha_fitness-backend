/*
  Warnings:

  - You are about to drop the column `name` on the `exercise` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `workout` table. All the data in the column will be lost.
  - Added the required column `label` to the `exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `label` to the `workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `exercise` DROP COLUMN `name`,
    ADD COLUMN `label` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `workout` DROP COLUMN `title`,
    ADD COLUMN `label` VARCHAR(191) NOT NULL;
