export const filterMatchedDatas = <T extends NonNullable<unknown>, U extends keyof T & string>(
  matchingTarget: T | null,
  matchingKeyword: string | undefined,
  matchingField: Array<U>,
): boolean => {
  if (!matchingKeyword) return true;

  if (!matchingTarget) return false;

  const lowerCasedInput = matchingKeyword.toLowerCase();

  return matchingField.some((field) => {
    if (typeof matchingTarget[field] === 'string') {
      return (matchingTarget[field] as string).toLocaleLowerCase().includes(lowerCasedInput);
    }

    return false;
  });
};
