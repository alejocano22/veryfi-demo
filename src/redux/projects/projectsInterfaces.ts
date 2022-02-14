export interface projectsI {
  projects: projectI[];
}

export interface projectI {
  id: number;
  description: string;
  name: string;
  totalReceived: number;
  spent: number;
  estimatedTotal: number;
  status: string;
}
