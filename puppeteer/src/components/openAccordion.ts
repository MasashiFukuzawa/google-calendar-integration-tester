import { Page } from "../mod.ts";
import waitFor from "../utils/waitFor.ts";

const ACCORDION_BUTTON = "div.U26fgb.p0oLxb.QkA63b.dpr9Zd.lrZTuc";

const openAccordion = async (page: Page): Promise<void> => {
  await page.waitForSelector(ACCORDION_BUTTON);
  await page.click(ACCORDION_BUTTON);

  await waitFor(1000);
};

export default openAccordion;
