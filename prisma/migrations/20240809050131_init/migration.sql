-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "imagen" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 0,
    "solicitados" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagina" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "visitas" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Pagina_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Producto" ADD CONSTRAINT "Producto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
