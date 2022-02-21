import { responseToCurrencyModel } from '@redux/common/mappers';
import { tagI } from '@redux/tags/types';

export const responseToTagsModel = (tags: any[]): tagI[] => {
  return tags.map((category) => responseToTagModel(category));
};

export const responseToTagModel = (tag: any): tagI => {
  return {
    id: tag['id'],
    name: tag['name'],
    spent: tag['spent'],
    currency: responseToCurrencyModel(tag['currency']),
  };
};
