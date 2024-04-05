import React from 'react';

export class App extends React.Component {
  state = {
    lastKey: '',
  };

  changeKey = (event: KeyboardEvent) => {
    this.setState({
      lastKey: event.key,
    });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.changeKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.changeKey);
  }

  render(): React.ReactNode {
    const { lastKey } = this.state;

    return (
      <div className="App">
        {lastKey ? (
          <p className="App__message">The last pressed key is [{lastKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
