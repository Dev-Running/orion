/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Contract` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Lesson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Manager` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `Module` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Contract_id_key" ON "Contract"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_id_key" ON "Course"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lesson_id_key" ON "Lesson"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Manager_id_key" ON "Manager"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Module_id_key" ON "Module"("id");
