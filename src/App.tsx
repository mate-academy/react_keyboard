import React from 'react';

type Props = {};
type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: null,
  };

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </p>
      </div>
    );
  }
}
