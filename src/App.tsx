import React from 'react';

type State = {
  currentButton: string | null;
};

export class App extends React.Component<{}, State> {
  state: State = {
    currentButton: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleCurrentButton);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleCurrentButton);
  }

  handleCurrentButton = (event: KeyboardEvent) => {
    this.setState({ currentButton: event.key });
  };

  render() {
    const { currentButton } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!currentButton ? (
            'Nothing was pressed yet'
          ) : (
            `The last pressed key is [${currentButton}]`
          )}
        </p>
      </div>
    );
  }
}
