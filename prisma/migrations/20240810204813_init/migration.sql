/*
  Warnings:

  - You are about to drop the column `solicitados` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `visitas` on the `Producto` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `VisitaCategoria` table. All the data in the column will be lost.
  - You are about to drop the column `numero` on the `VisitaGeneral` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Producto" DROP COLUMN "solicitados",
DROP COLUMN "visitas";

-- AlterTable
ALTER TABLE "VisitaCategoria" DROP COLUMN "numero",
ADD COLUMN     "vistas" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "VisitaGeneral" DROP COLUMN "numero",
ADD COLUMN     "vistas" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "VistaProducto" (
    "id" SERIAL NOT NULL,
    "vistas" INTEGER NOT NULL DEFAULT 1,
    "solicitados" INTEGER NOT NULL DEFAULT 1,
    "idProducto" INTEGER NOT NULL,
    "idFecha" INTEGER NOT NULL,

    CONSTRAINT "VistaProducto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VistaProducto_idProducto_key" ON "VistaProducto"("idProducto");

-- CreateIndex
CREATE UNIQUE INDEX "VistaProducto_idFecha_key" ON "VistaProducto"("idFecha");

-- AddForeignKey
ALTER TABLE "VistaProducto" ADD CONSTRAINT "VistaProducto_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VistaProducto" ADD CONSTRAINT "VistaProducto_idFecha_fkey" FOREIGN KEY ("idFecha") REFERENCES "Fecha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
