import { Filter } from '../app/models/Filter';
export const allCheckboxFilters = [
  new Filter({ name: 'Waiting on expert' }),
  new Filter({ name: 'Waiting on client' }),
  new Filter({ name: 'Manual by expert' }),
  new Filter({ name: 'Manual by client' })
];
