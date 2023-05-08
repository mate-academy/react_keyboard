import React from 'react';

interface State {
  clickedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clickedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ clickedKey: event.key });
  };

  render() {
    const { clickedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {clickedKey
            ? `The last pressed key is [${clickedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
