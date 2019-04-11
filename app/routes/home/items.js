import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {
      itemList: this.store.findAll('item'),
      newItemName: ''
    }
  },
  actions: {
    createItem() {
      const item = this.store.createRecord('item', {
        name: this.modelFor(this.routeName).newItemName,
      });
      item.save();
    }
  }
});
