import React from 'react';
import { observer } from 'mobx-react';

function List({ store: { items } }) {
  return <ul>
    {items.map(({ label, key, onRemove }) => <li key={key}><label> {label} </label> <button onClick={onRemove}>remove</button></li>)}
  </ul>;
}

export default observer(List);