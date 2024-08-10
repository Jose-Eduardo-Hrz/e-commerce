/*
  Warnings:

  - You are about to drop the column `categoriaId` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the `Pagina` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idCategoria` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pagina" DROP CONSTRAINT "Pagina_categoriaId_fkey";

-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "visitas" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "categoriaId",
ADD COLUMN     "idCategoria" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Pagina";

-- CreateTable
CREATE TABLE "Visitas" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "numero" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Visitas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Busqueda" (
    "id" SERIAL NOT NULL,
    "palabra" TEXT NOT NULL,
    "solicitado" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Busqueda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Busqueda_palabra_key" ON "Busqueda"("palabra");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
