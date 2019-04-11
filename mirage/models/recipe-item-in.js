import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  recipe: belongsTo('recipe'),
  item: belongsTo('item'),
});
