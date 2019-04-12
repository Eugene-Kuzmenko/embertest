import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  qty: faker.list.random(1,2,3,4,5,6,7,8,9),
});
