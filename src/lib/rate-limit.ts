const WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

type Bucket = {
  tokens: number;
  updatedAt: number;
};

const store = new Map<string, Bucket>();

export function rateLimit(identifier: string) {
  const now = Date.now();
  const bucket = store.get(identifier);

  if (!bucket || now - bucket.updatedAt > WINDOW) {
    store.set(identifier, { tokens: 1, updatedAt: now });
    return { success: true };
  }

  if (bucket.tokens >= MAX_REQUESTS) {
    return {
      success: false,
      retryAfter: WINDOW - (now - bucket.updatedAt),
    };
  }

  bucket.tokens += 1;
  store.set(identifier, bucket);
  return { success: true };
}
