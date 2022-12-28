import { Component } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

type State = {
  pressedKey: string
};

export class App extends Component<{}, State> {
  state:Readonly<State> = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key) {
        this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      if (event.key) {
        this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
      }
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <Box
          className="App__message"
          sx={{
            width: 500,
            height: 150,
            backgroundColor: 'text.disabled',
          }}
        >
          {pressedKey}
        </Box>
      </div>
    );
  }
}
