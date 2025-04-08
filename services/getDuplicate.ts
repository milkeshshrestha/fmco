const getDuplicateArray = <T extends Record<string, any>>(
  arr: T[],
  key: keyof T
) => {
  //find and restrict duplicate shareholder number
  const idCountMap = new Map<any, number>();

  arr.forEach((item) => {
    idCountMap.set(item[key], (idCountMap.get(item[key]) || 0) + 1);
  });

  const duplicates = Array.from(idCountMap.entries())
    .map(([id, count]) => ({
      id,
      count,
    }))
    .filter((share) => share.count > 1);
  return duplicates;
};
export default getDuplicateArray;
