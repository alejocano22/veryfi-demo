import { chartI } from '@redux/common/types';
import { currencyI } from '@redux/common/types';

export interface tagsI {
  tags: tagI[];
}

export interface tagI extends chartI {
  id: number;
  currency: currencyI;
}
