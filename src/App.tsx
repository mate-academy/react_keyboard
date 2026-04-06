import React from 'react';

type Props = {};

type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: null,
  };

  handleKeyup = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: e.key,
    });
  };

  componentDidMount = () => {
    document.addEventListener('keyup', this.handleKeyup);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keyup', this.handleKeyup);
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {!this.state.pressedKey && <>Nothing was pressed yet</>}
          {this.state.pressedKey && (
            <>The last pressed key is [{this.state.pressedKey}]</>
          )}
        </p>
      </div>
    );
  }
}
