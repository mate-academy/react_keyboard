import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    // Adding the global event listener when the component mounts
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    // Cleaning up the global event listener before the component unmounts
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  // Using an arrow function automatically binds `this`
  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

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
