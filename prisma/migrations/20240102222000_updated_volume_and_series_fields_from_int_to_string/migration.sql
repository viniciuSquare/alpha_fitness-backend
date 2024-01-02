/*
  Warnings:

  - You are about to alter the column `weight` on the `workout-exercise-execution` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `workout-exercise-execution` MODIFY `volume` VARCHAR(191) NOT NULL,
    MODIFY `series` VARCHAR(191) NOT NULL,
    MODIFY `weight` DOUBLE NOT NULL;
