// lib/redis.ts
import { Redis } from "@upstash/redis";

export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL || '',
    token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export const setShortUrl = async ({ key, value }: { key: string, value: string }) => {
    const res = await redis.set(key, value);
    console.log(res)
};

export const getShortUrl = async (key: string): Promise<string | null> => {
    console.log("reading from redis for key: ", key)
    const longUrl = await redis.get<string>(key);
    console.log("got result back: ", longUrl)
    return longUrl || null;
};

export const deleteShortUrl = async (key: string) => {
    console.log("short url with key:",key,"deleted successfully")
    await redis.del(key);
};