import DS from 'ember-data';
const { Model, attr, belongsTo } = DS;

export default Model.extend({
  qty: attr('Number'),
  item: belongsTo('item'),
  recipe: belongsTo('recipe'),
});
