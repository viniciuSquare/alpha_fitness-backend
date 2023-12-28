/*
  Warnings:

  - You are about to drop the column `dayOfTheWeek` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the column `order` on the `Routine` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `workout` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `workout-exercise-execution` table. All the data in the column will be lost.
  - Added the required column `delete_when_ended` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Routine` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `workout` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Routine` DROP FOREIGN KEY `Routine_userId_fkey`;

-- AlterTable
ALTER TABLE `Routine` DROP COLUMN `dayOfTheWeek`,
    DROP COLUMN `order`,
    ADD COLUMN `delete_when_ended` BOOLEAN NOT NULL,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    MODIFY `userId` INTEGER NULL;

-- AlterTable
ALTER TABLE `RoutineWorkout` ADD COLUMN `day_of_week` VARCHAR(191) NULL,
    ADD COLUMN `order` INTEGER NULL;

-- AlterTable
ALTER TABLE `workout` DROP COLUMN `label`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `workout-exercise-execution` DROP COLUMN `label`,
    ADD COLUMN `obs` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `UserRoutine` (
    `userId` INTEGER NOT NULL,
    `routineId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `routineId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Routine` ADD CONSTRAINT `Routine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRoutine` ADD CONSTRAINT `UserRoutine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserRoutine` ADD CONSTRAINT `UserRoutine_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `Routine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
