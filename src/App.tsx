import React from 'react';
import Button from '@mui/material/Button';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyHandler);
  }

  keyHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <Button variant="contained">
        <div className="App">
          <p className="App__message">
            {pressedKey
              ? `The last pressed key is [${this.state.pressedKey}]`
              : 'Nothing was pressed yet'}
          </p>
        </div>
      </Button>
    );
  }
}
