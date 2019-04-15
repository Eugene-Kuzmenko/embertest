import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(i) {
    return `Recipe ${i}`
  },
  time: faker.random.number.range(0,2),
});
