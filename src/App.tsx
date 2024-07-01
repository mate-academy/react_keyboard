import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  settingPresKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.settingPresKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.settingPresKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey
            ? `The last pressed key is [${this.state.pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
