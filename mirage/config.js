export default function() {
  this.get('/items');
  this.post('/items');
  this.get('/item/:id');
  this.patch('/item/:id');
  this.del('/item/:id');

  this.get('/recipes');
  this.post('/recipes');
  this.patch('/recipe/:id');
  this.del('/recipe/:id');

  this.get('/recipe-item-ins');
  this.post('/recipe-item-ins');
  this.patch('/recipe-item-in/:id');
  this.del('/recipe-item-in/:id');

  this.get('/recipe-item-outs');
  this.post('/recipe-item-outs');
  this.patch('/recipe-item-out/:id');
  this.del('/recipe-item-out/:id');

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */
}
