import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('recipe', {
      include: 'itemsIn,itemsIn.item,itemsOut,itemsOut.item'
    });
  },

  actions: {
    // addRecipe() {
    //   console.log('addRecipe');
    // },
    // addRatio() {
    //   console.log('addRatio')
    // },
  }
});
