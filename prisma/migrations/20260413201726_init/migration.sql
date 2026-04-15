-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Batch" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL,
    "batchNumber" TEXT,
    "invoiceNumber" TEXT,
    "quantity" INTEGER NOT NULL,
    "remainingQty" INTEGER NOT NULL,
    "costPrice" REAL NOT NULL,
    "sellingPrice" REAL NOT NULL,
    "manufactureDate" DATETIME,
    "expiryDate" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Batch_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Batch_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Batch" ("batchNumber", "costPrice", "createdAt", "expiryDate", "id", "invoiceNumber", "manufactureDate", "productId", "quantity", "remainingQty", "sellingPrice", "supplierId") SELECT "batchNumber", "costPrice", "createdAt", "expiryDate", "id", "invoiceNumber", "manufactureDate", "productId", "quantity", "remainingQty", "sellingPrice", "supplierId" FROM "Batch";
DROP TABLE "Batch";
ALTER TABLE "new_Batch" RENAME TO "Batch";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
