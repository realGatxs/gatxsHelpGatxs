-- CreateTable
CREATE TABLE "Help" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Help_pkey" PRIMARY KEY ("id")
);
