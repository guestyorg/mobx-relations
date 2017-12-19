import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from "mobx-react";

import FilterBar from './FilterBar';
import filterBarStore from './FilterBarStore';

@observer
class App extends Component {
  render() {
    return (
      <div>
        <FilterBar store={filterBarStore} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));