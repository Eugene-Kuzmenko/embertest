import { Factory, association, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Recipe ${i}`
  },
  time: faker.random.number.range(0,2),
  itemsIn: association(),
  itemsOut: association(),
});
