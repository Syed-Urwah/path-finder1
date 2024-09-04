-- AlterTable
ALTER TABLE "Answer" ALTER COLUMN "ans" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Option" ALTER COLUMN "question" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "productName" DROP NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;
