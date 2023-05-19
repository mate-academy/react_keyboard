import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerPressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlerPressedKey);
  }

  handlerPressedKey = ((event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  });

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
