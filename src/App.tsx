import React from 'react';

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState('');

//   useEffect(() => {
//     document.addEventListener('keyup', (event: KeyboardEvent) => {
//       setPressedKey(event.key);
//     });

//     return () => {
//       document.removeEventListener('keyup', (event: KeyboardEvent) => {
//         setPressedKey(event.key);
//       });
//     };
//   }, []);

//   return (
//     <div className="App">
//       {pressedKey.length
//         ? (
//           <p className="App__message">
//             The last pressed key is
//             [
//             {pressedKey}
//             ]
//           </p>
//         ) : (
//           <p className="App__message">
//             Nothing was pressed yet
//           </p>
//         )}
//     </div>
//   );
// };

interface State {
  pressedKey: string;
}

export class App extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey.length
          ? (
            <p className="App__message">
              The last pressed key is
              [
              {pressedKey}
              ]
            </p>
          ) : (
            <p className="App__message">
              Nothing was pressed yet
            </p>
          )}
      </div>
    );
  }
}
