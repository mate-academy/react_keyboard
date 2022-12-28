import React from 'react';
import Button from '@mui/material/Button';

type State = {
  pressedKey: string,
};

export class App extends React.Component <{}, State> {
  state: Readonly<State> = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <Button variant="contained">
          <p className="App__message">
            {
              pressedKey
                ? `The last pressed key is [${pressedKey}]`
                : 'Nothing was pressed yet'
            }
          </p>
        </Button>
      </div>
    );
  }
}
