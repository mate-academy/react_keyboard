import React from 'react';
import { Box, Paper } from '@mui/material';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.callback);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.callback);
  }

  callback = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <Box
        className="Box"
        sx={{
          '& > :not(style)': {
            width: 400,
          },
        }}
      >
        <Paper>
          <div className="App">
            <p className="App__message">
              {pressedKey
                ? `The last pressed key is [${pressedKey}]`
                : 'Nothing was pressed yet'}
            </p>
          </div>
        </Paper>
      </Box>
    );
  }
}
