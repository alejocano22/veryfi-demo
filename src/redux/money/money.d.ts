interface moneySliceI {
  in: moneyI;
  out: moneyI;
  lastQuarter: QuarterCategoryI[];
}

interface moneyI {
  labels: string[];
  totals: number[];
}

interface QuarterCategoryI {
  id: number;
  name: string;
  periods: QuarterPeriodI[];
}

interface QuarterPeriodI {
  id: number;
  balance: number;
  budget: number;
  spent: number;
}
