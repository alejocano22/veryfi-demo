import { projectI } from '@redux/projects/types';

export const responseToProjectsModel = (projects: any[]): projectI[] => {
  return projects.map((project) => responseToProjectModel(project));
};

export const responseToProjectModel = (tag: any): projectI => {
  return {
    id: tag['id'],
    name: tag['name'],
    spent: tag['total_spent'],
    description: tag['description'],
    estimatedTotal: tag['estimated_total'],
  };
};
