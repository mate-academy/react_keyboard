import React from 'react';

interface State {
  pressedKey?: string | null; // optional property
}

export class App extends React.Component<{}, State> {
  // explicit state type tells TS that `selectedUser` can be a `User` not only `null`
  state: Readonly<State> = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    // users must be User[] not number[]
    ///  this.setState({ users: [{ id: 1 }, { id: 2 }, { id: 3 }] });

    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    if (pressedKey === null) {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    } else {
      return (
        <div className="App">
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        </div>
      );
    }
  }
}
