/*
  Warnings:

  - A unique constraint covering the columns `[idFecha]` on the table `VisitaCategoria` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VisitaCategoria_idFecha_key" ON "VisitaCategoria"("idFecha");
