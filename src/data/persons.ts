import { Person } from '../app/models/Person';
import { Region } from '../app/models/Region';
export const persons = [
  new Person({
    firstName: 'Mikhail',
    lastName: 'Kuznetsov',
    region: new Region({ name: 'EMEA' }),
    role: 'expert',
    companyName: 'Grid Dynamics'
  }),
  new Person({
    firstName: 'Nikita',
    lastName: 'Reshetnikov',
    region: new Region({ name: 'AMERICAS' }),
    role: 'client',
    companyName: 'Some Company'
  }) ];
