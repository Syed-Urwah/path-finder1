/*
  Warnings:

  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_optionId_fkey";

-- DropTable
DROP TABLE "Answer";

-- CreateTable
CREATE TABLE "answer" (
    "id" SERIAL NOT NULL,
    "ans" TEXT NOT NULL,
    "img" TEXT,
    "optionId" INTEGER NOT NULL,

    CONSTRAINT "answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "answer" ADD CONSTRAINT "answer_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
