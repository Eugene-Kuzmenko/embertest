import {A} from "@ember/array";
import Component from "@ember/component";
import {inject} from "@ember/service";

export default Component.extend({
  store: inject(),
  item: null,
  isOut: false,
  qty: 0,
  availableItems: A([]),
  init() {
    this.set("availableItems", this.store.findAll("item"));
  }
});
