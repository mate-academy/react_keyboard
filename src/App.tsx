import React from 'react';

type Props = {
};

type State = {
  pressedKey: boolean,
  key: string,
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: false,
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: true, key: event.key });
    });
  }

  render() {
    const { pressedKey, key } = this.state;

    return (
      <div className="App">
        {!pressedKey ? 'Nothing was pressed yet' : `The last pressed key is ${key}`}
      </div>
    );
  }
}
