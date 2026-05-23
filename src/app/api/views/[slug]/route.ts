import { Redis } from "@upstash/redis";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = `views:${slug}`;
  const views = (await redis.get<number>(key)) ?? 0;
  return NextResponse.json({ views });
}

export async function POST(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = `views:${slug}`;
  const views = await redis.incr(key);
  return NextResponse.json({ views });
}
