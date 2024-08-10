/*
  Warnings:

  - Added the required column `idCategoria` to the `VisitaCategoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VisitaCategoria" ADD COLUMN     "idCategoria" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "VisitaCategoria" ADD CONSTRAINT "VisitaCategoria_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
