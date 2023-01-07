import { Page } from "../../mod.ts";
import waitFor from "../../utils/waitFor.ts";

const ACCORDION_BUTTON = "div.U26fgb.p0oLxb.QkA63b.dpr9Zd.lrZTuc";

const openAccordion = async (page: Page): Promise<void> => {
  await page.waitForSelector(ACCORDION_BUTTON);
  await page.click(ACCORDION_BUTTON);

  // NOTE: アコーディオンが開くのにやや時間が掛かるため待機時間が必要
  await waitFor(1000);
};

export default openAccordion;
