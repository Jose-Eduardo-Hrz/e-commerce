/*
  Warnings:

  - Added the required column `inversion` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "inversion" DOUBLE PRECISION NOT NULL;
