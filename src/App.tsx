import React from 'react';
type State = {
  pressed: boolean;
  key: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressed: false,
    key: '',
  };

  handleKeypress = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
      pressed: true,
    });
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeypress);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeypress);
  }

  render() {
    const { pressed, key } = this.state;

    return (
      <div className="App">
        {pressed ? (
          <p className="App__message">The last pressed key is [{key}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
