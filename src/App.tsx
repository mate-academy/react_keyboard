import React from 'react';

interface Props {}

interface State {
  pressedKey: string;
}

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  keyPressHandle = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPressHandle);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPressHandle);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey === '' ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        )}
      </div>
    );
  }
}
