/*
  Warnings:

  - You are about to drop the `exercise-executions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `workout-exercises` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `muscleGroupId` to the `exercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sug-volume` to the `exercise` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `exercise-executions` DROP FOREIGN KEY `exercise-executions_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `exercise-executions` DROP FOREIGN KEY `exercise-executions_userId_fkey`;

-- DropForeignKey
ALTER TABLE `workout-exercises` DROP FOREIGN KEY `workout-exercises_exerciseId_fkey`;

-- DropForeignKey
ALTER TABLE `workout-exercises` DROP FOREIGN KEY `workout-exercises_workoutId_fkey`;

-- AlterTable
ALTER TABLE `exercise` ADD COLUMN `muscleGroupId` INTEGER NOT NULL,
    ADD COLUMN `rest` INTEGER NULL,
    ADD COLUMN `sug-series` INTEGER NOT NULL DEFAULT 3,
    ADD COLUMN `sug-volume` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `exercise-executions`;

-- DropTable
DROP TABLE `workout-exercises`;

-- CreateTable
CREATE TABLE `MuscleGroup` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Routine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `dayOfTheWeek` VARCHAR(191) NOT NULL,
    `order` INTEGER NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoutineWorkout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `routineId` INTEGER NOT NULL,
    `workoutId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `workout-exercise-execution` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `exerciseId` INTEGER NOT NULL,
    `workoutId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `order` INTEGER NOT NULL,
    `rest` INTEGER NOT NULL DEFAULT 90,
    `volume` INTEGER NOT NULL,
    `series` INTEGER NOT NULL,
    `weight` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Routine` ADD CONSTRAINT `Routine_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoutineWorkout` ADD CONSTRAINT `RoutineWorkout_routineId_fkey` FOREIGN KEY (`routineId`) REFERENCES `Routine`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoutineWorkout` ADD CONSTRAINT `RoutineWorkout_workoutId_fkey` FOREIGN KEY (`workoutId`) REFERENCES `workout`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workout-exercise-execution` ADD CONSTRAINT `workout-exercise-execution_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workout-exercise-execution` ADD CONSTRAINT `workout-exercise-execution_workoutId_fkey` FOREIGN KEY (`workoutId`) REFERENCES `workout`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `workout-exercise-execution` ADD CONSTRAINT `workout-exercise-execution_exerciseId_fkey` FOREIGN KEY (`exerciseId`) REFERENCES `exercise`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `exercise` ADD CONSTRAINT `exercise_muscleGroupId_fkey` FOREIGN KEY (`muscleGroupId`) REFERENCES `MuscleGroup`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
