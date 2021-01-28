/*
  Warnings:

  - Added the required column `jobId` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" ADD COLUMN     "jobId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Customers" ADD FOREIGN KEY ("jobId") REFERENCES "Jobs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
