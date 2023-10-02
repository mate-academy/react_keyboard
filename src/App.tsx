import React from 'react';

type State = {
  pressedKey: string,
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlerDocumentKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerDocumentKeyUp);
  }

  handlerDocumentKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey ? (
            `The last pressed key is [${pressedKey}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>

      </div>
    );
  }
}
