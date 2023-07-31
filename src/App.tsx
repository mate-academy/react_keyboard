import React from 'react';

export class App extends React.Component {
  state = {
    currentKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render(): React.ReactNode {
    const { currentKey } = this.state;

    return (
      <div className="App">
        {currentKey
          ? <p className="App__message">{`The last pressed key is [${currentKey}]`}</p>
          : 'Nothing was pressed yet'}
      </div>
    );
  }
}
