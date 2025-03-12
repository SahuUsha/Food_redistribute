-- CreateTable
CREATE TABLE "placeInfo" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNo" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "Lattitude" TEXT NOT NULL,
    "Longitude" TEXT NOT NULL,

    CONSTRAINT "placeInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "placeInfo_id_key" ON "placeInfo"("id");
