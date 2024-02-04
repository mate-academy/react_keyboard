import React from 'react';

interface State {
  pressedKey: string;
}
// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    // eslint-disable-next-line react/state-in-constructor
    this.state = {
      pressedKey: '',
    };
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="app">
        <p className="App__message">
          {pressedKey !== '' ? `The last pressed key is [${pressedKey}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
