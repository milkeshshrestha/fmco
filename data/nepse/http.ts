import {
  BASE_URL,
  MAX_RETRIES,
  REQUEST_TIMEOUT_MS,
  RETRY_DELAY_MS,
} from "./constants";

/**
 * Unified fetch with timeout. Use Axios conventions:
 *   - method: 'GET' | 'POST' | ...
 *   - headers: {...}
 *   - data: request body (for POST/PUT)
 *   - params: query params (for GET)
 * Usage:
 *   fetchWithTimeout(url, { method: 'POST', headers, data })
 */
export async function fetchWithTimeout(
  url: string,
  config: any = {},
  timeout = REQUEST_TIMEOUT_MS,
): Promise<any> {
  return fetch(url, { ...config, signal: AbortSignal.timeout(timeout) });
}

export async function fetchWithRetry(
  url: string,
  config: any = {},
  retries = MAX_RETRIES,
  delay = RETRY_DELAY_MS,
): Promise<any> {
  try {
    return await fetchWithTimeout(url, config);
  } catch (error: any) {
    if (retries <= 0) throw error;

    await new Promise((resolve) => setTimeout(resolve, delay));
    return fetchWithRetry(url, config, retries - 1, delay * 2);

    throw error;
  }
}

export type HeadersMap = Readonly<Record<string, string>>;

// The following function is the correct implementation of createHeaders
export function createHeaders(
  token?: string,
  options?: { omitAuthorization?: boolean },
): HeadersMap {
  const baseHeaders: Record<string, string> = {
    "User-Agent": "Mozilla/5.0",
    Accept: "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9",
    Connection: "keep-alive",
    Referer: `${BASE_URL}/`,
    "Content-Type": "application/json",
  };
  if (!options?.omitAuthorization && token) {
    baseHeaders["Authorization"] = `Salter ${token}`;
  }
  return baseHeaders as HeadersMap;
}
