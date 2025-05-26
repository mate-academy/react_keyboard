import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    pressedKey: '',
  };

  // message = React.createRef<HTMLParagraphElement>();

  key = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.key);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.key);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey.length > 0 ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          'Nothing was pressed yet'
        )}
      </div>
    );
  }
}
