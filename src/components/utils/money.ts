export const getNetAmount = (
  moneyIn: number[],
  moneyOut: number[]
): number[] => {
  return moneyIn && moneyOut
    ? moneyIn?.map((value, index) => value - moneyOut[index])
    : null;
};
