import { BASE_URL } from "./constants";
import { createNepseError } from "./errors";
import { NepseDecodeFunction, NepseError, NepseExports } from "./types";
import { createHeaders } from "./http";

export async function loadWasmModule(
  wasmUrl: string = `${BASE_URL}/assets/prod/css.wasm`,
  logger?: { error: (msg: string, ...args: unknown[]) => void },
): Promise<NepseExports> {
  const MAX_RETRIES = 3;
  let lastError: any = null;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const buffer = await fetch(wasmUrl, {
        headers: {
          ...createHeaders(undefined, { omitAuthorization: true }), // No Authorization header needed
        },
      })
        .then((res) => {
          if (!res.ok) {
            if (logger)
              logger.error(
                `Failed to fetch WASM module: ${res.status} ${res.statusText}`,
              );
            throw createNepseError(
              `Failed to fetch WASM module:  ${res.status}`,
              "WASM_FETCH_ERROR",
            );
          }
          return res.arrayBuffer();
        })
        .then((buffer) => {
          return buffer;
        });

      const { instance } = await WebAssembly.instantiate(buffer);
      return {
        cdx: instance.exports.cdx as NepseDecodeFunction,
        rdx: instance.exports.rdx as NepseDecodeFunction,
        bdx: instance.exports.bdx as NepseDecodeFunction,
        ndx: instance.exports.ndx as NepseDecodeFunction,
        mdx: instance.exports.mdx as NepseDecodeFunction,
      };
    } catch (error) {
      lastError = error;
      if (logger) logger.error(`WASM fetch attempt ${attempt} failed`, error);
      if (attempt < MAX_RETRIES) {
        await new Promise((res) => setTimeout(res, 1000 * attempt));
      }
    }
  }
  // After retries, throw detailed error
  throw createNepseError(
    "Failed to instantiate WASM module after retries",
    "WASM_INSTANTIATE_ERROR",
    lastError,
  );
}
