/*
  Warnings:

  - The `Lattitude` column on the `placeInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `Longitude` column on the `placeInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "placeInfo" DROP COLUMN "Lattitude",
ADD COLUMN     "Lattitude" DOUBLE PRECISION,
DROP COLUMN "Longitude",
ADD COLUMN     "Longitude" DOUBLE PRECISION;
