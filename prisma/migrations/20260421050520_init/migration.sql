/*
  Warnings:

  - Added the required column `paymentType` to the `Movement` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "note" TEXT,
    "issueNumber" TEXT,
    "paymentType" TEXT NOT NULL,
    "customerId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Movement_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Movement" ("createdAt", "customerId", "id", "note", "type") SELECT "createdAt", "customerId", "id", "note", "type" FROM "Movement";
DROP TABLE "Movement";
ALTER TABLE "new_Movement" RENAME TO "Movement";
CREATE TABLE "new_MovementItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "movementId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "batchId" TEXT,
    "quantity" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "MovementItem_movementId_fkey" FOREIGN KEY ("movementId") REFERENCES "Movement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovementItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MovementItem_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "Batch" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_MovementItem" ("batchId", "id", "movementId", "productId", "quantity") SELECT "batchId", "id", "movementId", "productId", "quantity" FROM "MovementItem";
DROP TABLE "MovementItem";
ALTER TABLE "new_MovementItem" RENAME TO "MovementItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
