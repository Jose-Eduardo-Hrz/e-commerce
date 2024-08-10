/*
  Warnings:

  - You are about to drop the column `visitas` on the `Categoria` table. All the data in the column will be lost.
  - You are about to drop the `Visitas` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `idTransaccion` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categoria" DROP COLUMN "visitas";

-- AlterTable
ALTER TABLE "Producto" ADD COLUMN     "idTransaccion" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Visitas";

-- CreateTable
CREATE TABLE "Transaccion" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Transaccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fecha" (
    "id" SERIAL NOT NULL,
    "fecha" TEXT NOT NULL,

    CONSTRAINT "Fecha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitaGeneral" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL DEFAULT 1,
    "idFecha" INTEGER NOT NULL,

    CONSTRAINT "VisitaGeneral_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitaCategoria" (
    "id" SERIAL NOT NULL,
    "numero" INTEGER NOT NULL DEFAULT 1,
    "idFecha" INTEGER NOT NULL,

    CONSTRAINT "VisitaCategoria_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaccion_nombre_key" ON "Transaccion"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Fecha_fecha_key" ON "Fecha"("fecha");

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_idTransaccion_fkey" FOREIGN KEY ("idTransaccion") REFERENCES "Transaccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitaGeneral" ADD CONSTRAINT "VisitaGeneral_idFecha_fkey" FOREIGN KEY ("idFecha") REFERENCES "Fecha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitaCategoria" ADD CONSTRAINT "VisitaCategoria_idFecha_fkey" FOREIGN KEY ("idFecha") REFERENCES "Fecha"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
