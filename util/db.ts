import mongoose from "mongoose";

interface ConnectionCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: ConnectionCache | undefined;
}

const cached: ConnectionCache = global.mongoose ?? {
  conn: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function ConnectDb() {
  if (cached.conn) return cached.conn;

  const db = process.env.DB_HOST;
  if (!db) throw new Error("DB_HOST not found");

  const promise = mongoose.connect(db);
  cached.promise = promise;
  cached.conn = await promise;
  return cached.conn;
}