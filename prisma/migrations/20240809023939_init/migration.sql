/*
  Warnings:

  - Added the required column `nombre` to the `Pagina` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pagina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Pagina" ("id", "visitas") SELECT "id", "visitas" FROM "Pagina";
DROP TABLE "Pagina";
ALTER TABLE "new_Pagina" RENAME TO "Pagina";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
