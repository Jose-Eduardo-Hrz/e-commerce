-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "imagen" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 0,
    "solicitados" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pagina" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "visitas" INTEGER NOT NULL DEFAULT 0
);
