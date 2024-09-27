import React from 'react';

type State = {
  pressedKey: string;
};

type Props = {};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKeyChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKeyChange);
  }

  handlePressedKeyChange = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!pressedKey
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
