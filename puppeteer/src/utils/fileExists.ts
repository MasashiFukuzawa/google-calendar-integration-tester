const fileExists = async (path: string): Promise<boolean> => {
  try {
    await Deno.lstat(path);
    // No errors, file or directory exists
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      // file or directory does not exist
      return false;
    } else {
      // unexpected error, maybe permissions, throw it
      throw error;
    }
  }
};

export default fileExists;
