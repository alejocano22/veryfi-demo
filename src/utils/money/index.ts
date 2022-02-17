export const netAmount = (moneyIn: number[], moneyOut: number[]): number[] => {
  return moneyIn.map((value, index) => value - moneyOut[index]);
};
