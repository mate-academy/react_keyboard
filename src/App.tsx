import React from 'react';

export class App extends React.PureComponent {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {!pressedKey
          ? (<p className="App__message">Nothing was pressed yet</p>)
          : (<p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>)}
      </div>
    );
  }
}
