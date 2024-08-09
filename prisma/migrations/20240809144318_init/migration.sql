/*
  Warnings:

  - You are about to drop the column `visitas` on the `Categoria` table. All the data in the column will be lost.
  - Added the required column `categoriaId` to the `Pagina` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "visitas";

-- AlterTable
ALTER TABLE "Pagina" ADD COLUMN     "categoriaId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Pagina" ADD CONSTRAINT "Pagina_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
