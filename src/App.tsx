import React from 'react';

interface Props {
  pressedKey: string | null;
}

export class App extends React.Component {
  state: Readonly<Props> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardPress);
  }

  keyboardPress = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
