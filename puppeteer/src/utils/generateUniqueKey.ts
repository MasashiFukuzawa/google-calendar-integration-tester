const generateUniqueKey = (): string => {
  return new Date().getTime().toString(16);
};

export default generateUniqueKey;
