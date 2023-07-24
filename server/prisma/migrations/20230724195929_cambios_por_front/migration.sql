/*
  Warnings:

  - You are about to drop the column `esterelizado` on the `animal` table. All the data in the column will be lost.
  - You are about to drop the column `rociado` on the `animal` table. All the data in the column will be lost.
  - You are about to alter the column `genero` on the `animal` table. The data in that column could be lost. The data in that column will be cast from `TinyInt` to `VarChar(191)`.
  - Added the required column `estilo` to the `animal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `animal` DROP COLUMN `esterelizado`,
    DROP COLUMN `rociado`,
    ADD COLUMN `estilo` VARCHAR(191) NOT NULL,
    MODIFY `genero` VARCHAR(191) NOT NULL;
