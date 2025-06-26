"use server";

import connectDB from "../_utilis/databaseConnection";

export async function connectMyInfo() {
  await connectDB();
}
