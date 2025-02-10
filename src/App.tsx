import React from 'react';

export class App extends React.Component {
  state: { pushKey: string } = {
    pushKey: '',
  };

  onPushKeyboard = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ pushKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onPushKeyboard);
  }

  componentWillUnmount(): void {
    removeEventListener('keyup', this.onPushKeyboard);
  }

  render() {
    const { pushKey } = this.state;

    return pushKey ? (
      <p className="App__message">The last pressed key is [{pushKey}]</p>
    ) : (
      <p className="App__message">Nothing was pressed yet</p>
    );
  }
}
