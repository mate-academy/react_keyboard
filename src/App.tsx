import React from 'react';

type State = {
  keyboard: string
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    keyboard: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyup);
  }

  handlerKeyup = (event: KeyboardEvent) => {
    this.setState({ keyboard: event.key });
  };

  render() {
    const { keyboard } = this.state;

    return (
      <div className="App">
        {this.state.keyboard
          ? (
            <p className="App__message">
              The last pressed key is [
              {keyboard}
              ]
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>}
      </div>
    );
  }
}
