export const responseToMoneyModel = (money: any): moneyI => {
  return {
    labels: money['labels'],
    totals: money['totals'],
  };
};
