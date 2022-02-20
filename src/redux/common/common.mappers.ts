import { currencyI } from '@redux/common/types';

export const responseToCurrencyModel = (currency: any): currencyI => {
  return {
    code: currency['code'],
    name: currency['name'],
    symbol: currency['symbol'],
  };
};
