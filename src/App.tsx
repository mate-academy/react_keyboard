import React from 'react';

// export const App: React.FC = () => {
//   const [buttonIsPressed, setButtonIsPressed] = useState(false);
//   const [pressedButton, setPressedButton] = useState('');

//   useEffect(() => {
//     document.addEventListener('keyup', event => {
//       setButtonIsPressed(true);
//       setPressedButton(event.key);
//     });
//   }, []);

//   return (
//     <div className="App">
//       {buttonIsPressed
//         ? (
//           <p className="App__message">
//             {`The last pressed key is ${pressedButton}`}
//           </p>
//         ) : (
//           <p className="App__message">
//             Nothing was pressed yet
//           </p>
//         )}
//     </div>
//   );
// };

export class App extends React.Component {
  state = {
    pressedButton: '',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyboardClick);
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    this.setState({ pressedButton: event.key });
  };

  render() {
    return (
      <div className="App">
        {this.state.pressedButton
          ? (
            <p className="App__message">
              {`The last pressed key is [${this.state.pressedButton}]`}
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
