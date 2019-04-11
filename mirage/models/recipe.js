import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  itemsIn: hasMany('recipe-item-in'),
  itemsOut: hasMany('recipe-item-out'),
});
