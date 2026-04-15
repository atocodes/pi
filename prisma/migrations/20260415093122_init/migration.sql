/*
  Warnings:

  - A unique constraint covering the columns `[tinNumber]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN "contactName" TEXT;
ALTER TABLE "Customer" ADD COLUMN "tinNumber" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Customer_tinNumber_key" ON "Customer"("tinNumber");
