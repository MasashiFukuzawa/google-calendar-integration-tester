import { join } from "https://deno.land/std@0.192.0/path/mod.ts";
import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { config, DotenvConfig } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import puppeteer, { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

export { assertEquals, config, join, Page, puppeteer };
export type { DotenvConfig };
