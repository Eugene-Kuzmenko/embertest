import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    const recipeList = this.store.findAll('recipe', { include: 'itemsIn,itemsIn.item,itemsOut,itemsOut.item'});
    return {
      recipeList,
    }
  },
});
