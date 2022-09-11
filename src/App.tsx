import React from 'react';

type State = {
  pressedkey: string,
};

export class App extends React.Component< {}, State > {
  state = {
    pressedkey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      const { key } = event;

      this.setState({ pressedkey: key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.state.pressedkey = event.key;
    });
  }

  render() {
    const { pressedkey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            pressedkey
              ? `The last pressed key is [${pressedkey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
