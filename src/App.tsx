import React from 'react';
import Typography from '@mui/material/Typography';

type State = {
  pressedKey: string
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpHandler);
  }

  keyUpHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          <Typography
            variant="h5"
            color="primary"
            fontStyle="italic"
          >
            { pressedKey }
          </Typography>
        </p>
      </div>
    );
  }
}
