

export default function(server) {
  const newItem = name => server.create('item', { name });
  const newIn = ([item, qty]) => server.create('recipe-item-in', { item, qty });
  const newOut = ([item, qty]) => server.create('recipe-item-out', { item, qty });
  const newRecipe = (name, ins, outs) => server.create('recipe', {
    name,
    itemsIn: ins.map(newIn),
    itemsOut: outs.map(newOut),
  });

  const wood = newItem('Wood');
  const plank = newItem('Plank');
  newRecipe('Plank from wood', [[wood, 1]], [[plank, 4]]);

  const stick = newItem('Stick');
  newRecipe('Sticks from planks', [[plank, 2]], [[stick, 4]]);

  const coal = newItem('Coal');
  const torch = newItem('Torch');
  newRecipe('Torches from coal', [[coal, 1], [stick, 1]], [[torch, 16]]);

}
