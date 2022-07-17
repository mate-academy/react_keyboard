import React from 'react';

type Props = {
};

type State = {
  pressedKey: string,
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === ' ') {
        this.setState({ pressedKey: 'The last pressed key is space' });
      } else {
        this.setState({ pressedKey: `The last pressed key is ${event.key}` });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key === ' ') {
        this.setState({ pressedKey: 'The last pressed key is space' });
      } else {
        this.setState({ pressedKey: `The last pressed key is ${event.key}` });
      }
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey}
      </div>
    );
  }
}
