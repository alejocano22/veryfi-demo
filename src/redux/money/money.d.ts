interface moneySliceI {
  in: moneyI;
  out: moneyI;
}

interface moneyI {
  labels: string[];
  totals: number[];
}
