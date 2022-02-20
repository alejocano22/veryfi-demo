interface moneySliceI {
  in: moneyI;
  out: moneyI;
  lastQuarter: QuarterI;
}

interface moneyI {
  labels: string[];
  totals: number[];
}

interface QuarterI {
  categories: QuarterCategoryI[];
  months: string[];
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
