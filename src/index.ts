import { User } from './models/User';

const user = new User({ name: 'myname', age: 20});

user.get('name');
user.get('age');

