const waitFor = (milliseconds: number): Promise<void> =>
  new Promise((r) => setTimeout(r, milliseconds));

export default waitFor;
