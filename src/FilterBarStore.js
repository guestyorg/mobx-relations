import { observable, action } from 'mobx';

import { get } from './resource';
import ListStore from './ListStore';

class Store {
  list = new ListStore(this);
  list2 = new ListStore(this);
}

const store = new Store();

get().then(items => store.list.setItems(items));
get().then(items => store.list2.setItems(items));

export default store;
