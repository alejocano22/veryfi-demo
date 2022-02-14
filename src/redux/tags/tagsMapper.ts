import { tagCurrencyI, tagI } from './tagsInterfaces';

export const responseToTagsModel = (tags: any[]): tagI[] => {
  return tags.map((category) => responseToTagModel(category));
};

export const responseToTagModel = (tag: any): tagI => {
  return {
    code: tag['code'],
    created: tag['created'],
    currency: responseToTagCurrencyModel(tag['currency']),
    currencyCode: tag['currency_code'],
    id: tag['id'],
    isFavorite: tag['is_favorite'],
    name: tag['name'],
    receiptsCount: tag['receipts_count'],
    source: tag['source'],
    spent: tag['spent'],
    status: tag['status'],
    type: tag['type'],
    weight: tag['weight'],
  };
};

export const responseToTagCurrencyModel = (currency: any): tagCurrencyI => {
  return {
    code: currency['code'],
    name: currency['name'],
    symbol: currency['symbol'],
  };
};
