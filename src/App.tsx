// import { event } from 'cypress/types/jquery';
import React, { Component } from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    // this.setState({ pressedKey: `The last pressed key is [${event.key}]` });
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

// {
//   this.state.pressedKey;
// }
