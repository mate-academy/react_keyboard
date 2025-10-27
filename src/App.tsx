import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  windowClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.windowClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.windowClick);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
