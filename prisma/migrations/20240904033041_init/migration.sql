/*
  Warnings:

  - You are about to drop the `Option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_optionId_fkey";

-- DropForeignKey
ALTER TABLE "Option" DROP CONSTRAINT "Option_productId_fkey";

-- DropTable
DROP TABLE "Option";

-- DropTable
DROP TABLE "Product";

-- CreateTable
CREATE TABLE "product" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "option" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "option" ADD CONSTRAINT "option_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
