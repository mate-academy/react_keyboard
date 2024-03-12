import React from 'react';

type State = {
  key: string;
};

export class App extends React.PureComponent {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyboardEvents);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyboardEvents);
  }

  handlerKeyboardEvents = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        {key ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{key}]</p>
        )}
      </div>
    );
  }
}
