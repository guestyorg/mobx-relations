import React from 'react';
import { observer } from 'mobx-react';

import List from './List';

function FilterBar({
  store: {
    list,
    list2
  },
}) {
  return <div>
    Filter Bar
    <List store={list} />
    <List store={list2} />
  </div>;
}

export default observer(FilterBar);