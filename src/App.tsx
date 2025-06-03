import React from 'react';

type Props = {};

type State = {
  pressedKey: string;
};
export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  keyupEventHandler = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyupEventHandler);
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
