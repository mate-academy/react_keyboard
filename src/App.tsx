import React from 'react';

type Props = {
  
}

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: null as string,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    // eslint-disable-next-line no-console
    this.setState({
      pressedKey: event.key,
    })
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: event.key,
    });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return (
      <>
        <div className="App" onKeyUp={this.handleKeyDown}>
          <p className="App__message">
            {this.state.pressedKey !== null ? `The last pressed key is [${this.state.pressedKey}]` : 'Nothing was pressed yet'}
          </p>
        </div>
      </>
    );
  }
}
