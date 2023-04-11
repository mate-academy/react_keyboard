import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div>
        {pressedKey ? (
          <p>
            The last pressed key is
            [
            {pressedKey}
            ]
          </p>
        ) : (
          <p>Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
