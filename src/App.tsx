import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyboardEventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyboardEventHandler);
  }

  keyboardEventHandler = (event: KeyboardEvent) => {
    this.setState({
      pressedKey: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey || 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
