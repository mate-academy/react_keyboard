import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: 'Nothing was pressed yet',
  };

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="App">
        {this.state.pressedKey !== 'Nothing was pressed yet' ? (
          <p className="App__message">
            The last pressed key is [{this.state.pressedKey}]
          </p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

// const [lastKey, setLastKey] = useState<string>('');
// const [keyHistory, setKeyHistory] = useState<string[]>([]);

// useEffect(() => {
//   const handleKeyDown = (event: KeyboardEvent) => {
//     setLastKey(event.key);
//     setKeyHistory(prevHistory => [...prevHistory, event.key]);
//   };

//   window.addEventListener('keyup', handleKeyDown);

//   return () => {
//     window.removeEventListener('keydown', handleKeyDown);
//   };
// }, []);

// componentWillUnmount() {
//   window.removeEventListener('keydown', handleKeyDown);
// }
//   return (
//     <div className="App">
//       {keyHistory.length > 0 ? (
//         <p className="App__message">The last pressed key is [{lastKey}]</p>
//       ) : (
//         <p className="App__message">Nothing was pressed yet</p>
//       )}
//     </div>
//   );
// };
