import React from 'react';

export class App extends React.Component {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleEventListener);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleEventListener);
  }

  handleEventListener = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    const { key } = this.state;
    const pressed = key
      ? `The last pressed key is [${key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{pressed}</p>
      </div>
    );
  }
}
