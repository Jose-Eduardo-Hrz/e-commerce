/*
  Warnings:

  - A unique constraint covering the columns `[idFecha]` on the table `VisitaGeneral` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VisitaGeneral_idFecha_key" ON "VisitaGeneral"("idFecha");
