export const delay = <T>(ms: number = 1000, data: T): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, ms);
  });
};
