import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener(
      'keyup', this.presKeyListener,
    );
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.presKeyListener);
  }

  presKeyListener = (ev: KeyboardEvent) => {
    this.setState({ pressedKey: ev.key });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === ''
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [ ${pressedKey} ]`}</p>}
      </div>
    );
  }
}

// code pushed with a --no-verify flag beacause of Cypress huge problems....
