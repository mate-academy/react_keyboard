import React from 'react';

type State = {
  lastPressedKey: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    lastPressedKey: '',
  };

  pressButton = (event: KeyboardEvent) => {
    this.setState({
      lastPressedKey: event.key,
    });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.pressButton);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.pressButton);
  }

  render() {
    const { lastPressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {lastPressedKey === ''
            ? `Nothing was pressed yet`
            : `The last pressed key is [${lastPressedKey}]`}
        </p>
      </div>
    );
  }
}
