/*
  Warnings:

  - You are about to drop the column `nombre_mascota` on the `animal` table. All the data in the column will be lost.
  - Added the required column `nombre` to the `animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animal` DROP COLUMN `nombre_mascota`,
    ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
