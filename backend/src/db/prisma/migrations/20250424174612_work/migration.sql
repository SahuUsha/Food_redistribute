-- CreateTable
CREATE TABLE "FundingPost" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "Description" TEXT,
    "Raised" TEXT,
    "Goal" TEXT,
    "img" TEXT,
    "Documents" TEXT,

    CONSTRAINT "FundingPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_donation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_donation_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "FundingPost_id_key" ON "FundingPost"("id");

-- CreateIndex
CREATE INDEX "_donation_B_index" ON "_donation"("B");

-- AddForeignKey
ALTER TABLE "_donation" ADD CONSTRAINT "_donation_A_fkey" FOREIGN KEY ("A") REFERENCES "FundingPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_donation" ADD CONSTRAINT "_donation_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
