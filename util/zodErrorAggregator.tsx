export const aggregateErrors = (errors: {
  [key: string]: string[];
}): string => {
  const aggregatedMessages = Object.values(errors).flat().join(", ");
  return aggregatedMessages;
};
