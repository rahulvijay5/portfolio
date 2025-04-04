// lib/redis.ts
import { Redis } from "@upstash/redis";

export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export const setShortUrl = async ({ key, value }: { key: string, value: string }) => {
    const res = await redis.set(key, value);
};

export const getShortUrl = async (key: string): Promise<string | null> => {
    const longUrl = await redis.get<string>(key);
    return longUrl || null;
};

export const deleteShortUrl = async (key: string) => {
    await redis.del(key);
};