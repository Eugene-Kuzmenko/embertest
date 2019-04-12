import DS from 'ember-data';
const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('String'),
  time: attr('Number'),
  itemsIn: hasMany('recipe-item-in', { inverse: 'recipe' }),
  itemsOut: hasMany('recipe-item-out', { inverse: 'recipe' }),
});
