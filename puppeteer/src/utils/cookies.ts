import { Page } from "../deps.ts";

export const setCookies = async (page: Page, filePath: string) => {
  const decoder = new TextDecoder("utf-8");
  const data = await Deno.readFile(filePath);
  await page.setCookie(...JSON.parse(decoder.decode(data)));
};

export const loginWithoutCookies = async (
  login: (page: Page) => Promise<void>,
  page: Page,
  filePath: string,
) => {
  await login(page);
  const cookies = await page.cookies();
  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(cookies, null, 2));
  await Deno.writeFile(filePath, data);
};
