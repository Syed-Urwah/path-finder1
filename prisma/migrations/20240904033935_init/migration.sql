/*
  Warnings:

  - You are about to drop the `answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `option` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "answer" DROP CONSTRAINT "answer_optionId_fkey";

-- DropForeignKey
ALTER TABLE "option" DROP CONSTRAINT "option_productId_fkey";

-- DropTable
DROP TABLE "answer";

-- DropTable
DROP TABLE "option";

-- DropTable
DROP TABLE "product";

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "ans" TEXT NOT NULL,
    "img" TEXT,
    "optionId" INTEGER NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
