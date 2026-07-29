import { type NextRequest, NextResponse } from "next/server";

import { Redis } from "@upstash/redis";

const hasRedisEnv =
  Boolean(process.env.UPSTASH_REDIS_REST_URL) && Boolean(process.env.UPSTASH_REDIS_REST_TOKEN);

const redis = hasRedisEnv ? Redis.fromEnv() : null;

const fallback = () => NextResponse.json({ views: 0 });

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!redis) return fallback();

  const { slug } = await params;
  const key = `views:${slug}`;

  try {
    const views = (await redis.get<number>(key)) ?? 0;
    return NextResponse.json({ views });
  } catch {
    return fallback();
  }
}

export async function POST(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!redis) return fallback();

  const { slug } = await params;
  const key = `views:${slug}`;

  try {
    const views = await redis.incr(key);
    return NextResponse.json({ views });
  } catch {
    return fallback();
  }
}
