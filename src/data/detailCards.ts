import { CardInfo } from '../app/models/Card';
import { persons } from './persons';
export const detailCards = [
  new CardInfo({
    status: 'ready',
    expert: persons[ 0 ],
    client: persons[ 1 ],
    projectName: 'New Project'
  }),
  new CardInfo({
    status: 'waiting',
    expert: persons[ 0 ],
    client: persons[ 1 ],
    projectName: 'New Project'
  }),
  new CardInfo({
    status: 'disqualified',
    expert: persons[ 0 ],
    client: persons[ 1 ],
    projectName: 'New Project'
  })
];
