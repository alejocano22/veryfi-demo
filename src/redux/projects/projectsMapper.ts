import { projectI } from './projectsInterfaces';

export const responseToProjectsModel = (projects: any[]): projectI[] => {
  return projects.map((project) => responseToProjectModel(project));
};

export const responseToProjectModel = (tag: any): projectI => {
  return {
    id: tag['id'],
    description: tag['description'],
    name: tag['name'],
    totalReceived: tag['total_received'],
    spent: tag['total_spent'],
    estimatedTotal: tag['estimated_total'],
    status: tag['status'],
  };
};
