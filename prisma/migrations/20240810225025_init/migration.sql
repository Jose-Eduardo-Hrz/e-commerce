-- AlterTable
ALTER TABLE "VisitaCategoria" ALTER COLUMN "vistas" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "VisitaGeneral" ALTER COLUMN "vistas" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "VistaProducto" ALTER COLUMN "vistas" SET DEFAULT 0,
ALTER COLUMN "solicitados" SET DEFAULT 0;
