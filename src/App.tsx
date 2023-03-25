import React, { Component } from 'react';

type State = {
  keyPressed: string | null;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    keyPressed: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleEvent);
  }

  handleEvent = (event: KeyboardEvent) => {
    this.setState(
      { keyPressed: event.key },
    );
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            keyPressed
              ? (`The last pressed key is [${keyPressed}]`)
              : ('Nothing was pressed yet')
          }
        </p>
      </div>
    );
  }
}
