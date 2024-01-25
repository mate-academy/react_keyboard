import React from 'react';

type State = { pressedButton: string };

export class App extends React.PureComponent<State> {
  state: State = {
    pressedButton: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleButtonClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleButtonClick);
  }

  handleButtonClick = (event: KeyboardEvent) => {
    this.setState({ pressedButton: event.key });
  };

  render() {
    const { pressedButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedButton
            ? `The last pressed key is [${pressedButton}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
