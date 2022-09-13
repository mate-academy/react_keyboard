import React from 'react';

import './App.scss';

type State = {
  phrase: string;
};

export class App extends React.Component<{}, State> {
  state = {
    phrase: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.callback);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.callback);
  }

  callback = (event: KeyboardEvent) => {
    this.setState({ phrase: `The last pressed key is [${event.key}]` });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.phrase}</p>
      </div>
    );
  }
}
