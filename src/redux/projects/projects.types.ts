import { chartI } from '@redux/common/types';

export interface projectsI {
  projects: projectI[];
}

export interface projectI extends chartI {
  id: number;
  description: string;
  estimatedTotal: number;
}
