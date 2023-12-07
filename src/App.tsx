import React from 'react';

type State = {
  pressedKey: null | KeyboardEvent
};

export class App extends React.PureComponent {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({ pressedKey });
  };

  render(): React.ReactNode {
    const { pressedKey } = this.state;

    return (
      <div>
        {pressedKey ? (
          <p>
            The last pressed key is
            {` [${pressedKey}]`}
          </p>
        ) : (
          <p>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
