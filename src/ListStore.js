import { observable, action, computed } from 'mobx';

class Item {
  @observable name;
  @observable type;
  store;

  @action setState = (item = {}) => Object.assign(this, item);

  constructor(item, store) {
    this.setState(item);
    this.store = store;
  }

  @action onRemove = () => {
    this.store.items.remove(this);
  };

  @computed
  get label() {
    return [this.type, this.name].join('-');
  }

  @computed
  get key() {
    return `${this.name}-${this.type}-${Date.now()}`
  }
}

class Store {
  @observable items = [];
  store;

  constructor(store) {
    this.store = store;
  }

  @action setItems = (items = []) => {
    this.items = items.map(item => new Item(item, this));
  };
}

export default Store;