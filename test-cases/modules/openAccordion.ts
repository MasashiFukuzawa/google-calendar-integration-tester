import { Page } from "https://deno.land/x/puppeteer@16.2.0/mod.ts";
import waitFor from "../../utils/waitFor.ts";

const MEETING_SELECTION_ACCORDION = "div.U26fgb.p0oLxb.QkA63b.dpr9Zd.lrZTuc";

const openAccordion = async (page: Page): Promise<void> => {
  await page.waitForSelector(MEETING_SELECTION_ACCORDION);
  await page.click(MEETING_SELECTION_ACCORDION);

  // NOTE: アコーディオンが開くのにやや時間が掛かるため待機時間が必要
  await waitFor(1000);
};

export default openAccordion;
