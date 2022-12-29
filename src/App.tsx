import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

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
      <div className="wrapper">
        <Box width="400px">
          <Card>
            <CardContent>
              <div className="App">
                <p className="App__message">
                  {pressedKey
                    ? `The last pressed key is [${pressedKey}]`
                    : 'Nothing was pressed yet'}
                </p>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    );
  }
}
