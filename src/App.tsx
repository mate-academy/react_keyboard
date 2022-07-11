import React from 'react';

type State = {
  keyPressed: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    keyPressed: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.storePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.storePressedKey);
  }

  storePressedKey = (event: KeyboardEvent) => {
    this.setState({ keyPressed: event.key });
  };

  render() {
    const { keyPressed } = this.state;

    return (
      <div className="App">
        <p>
          {
            keyPressed
              ? `The last pressed key is ${keyPressed}`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
