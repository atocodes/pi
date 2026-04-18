-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Batch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "batchNumber" TEXT,
    "invoiceNumber" TEXT,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "remainingQty" INTEGER NOT NULL DEFAULT 0,
    "manufactureDate" DATETIME NOT NULL,
    "expiryDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Batch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Batch" ("batchNumber", "createdAt", "expiryDate", "id", "invoiceNumber", "manufactureDate", "productId", "quantity", "remainingQty") SELECT "batchNumber", "createdAt", "expiryDate", "id", "invoiceNumber", "manufactureDate", "productId", "quantity", "remainingQty" FROM "Batch";
DROP TABLE "Batch";
ALTER TABLE "new_Batch" RENAME TO "Batch";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
