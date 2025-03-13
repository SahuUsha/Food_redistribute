/*
  Warnings:

  - You are about to drop the column `email` on the `placeInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "placeInfo" DROP COLUMN "email",
ADD COLUMN     "Address" TEXT,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "phoneNo" DROP NOT NULL,
ALTER COLUMN "Description" DROP NOT NULL,
ALTER COLUMN "Price" DROP NOT NULL,
ALTER COLUMN "Lattitude" DROP NOT NULL,
ALTER COLUMN "Longitude" DROP NOT NULL;
