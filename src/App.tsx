import React from 'react';

type State = {
  lastKeyPressed: string
};

export class App extends React.Component<State> {
  state: State = {
    lastKeyPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handlerKeyboardPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlerKeyboardPress);
  }

  handlerKeyboardPress = (event: KeyboardEvent) => {
    this.setState({
      lastKeyPressed: event.key,
    });
  };

  render() {
    const { lastKeyPressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastKeyPressed
            ? (`The last pressed key is [${lastKeyPressed}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
