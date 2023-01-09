const generateUniqueKey = (): string => {
  return (
    new Date().getTime().toString(16) + Math.floor(Math.random()).toString(16)
  );
};

export default generateUniqueKey;
