import React from 'react';

type State = {
  currentButton: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    currentButton: '',
  };

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({ currentButton: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  render() {
    const { currentButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentButton
            ? `The last pressed key is [${currentButton}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
