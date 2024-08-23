-- DropForeignKey
ALTER TABLE "Pagina" DROP CONSTRAINT "Pagina_categoriaId_fkey";

-- AlterTable
ALTER TABLE "Pagina" ALTER COLUMN "categoriaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pagina" ADD CONSTRAINT "Pagina_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE SET NULL ON UPDATE CASCADE;
