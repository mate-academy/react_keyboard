import React from 'react';

// class Component

type State = {
  pressedKey: string | null;
};

export class App extends React.Component {
  state: State = {
    pressedKey: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">
            The last pressed key is [
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

// function Component

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState<string | null>(null);

//   document.addEventListener('keyup', (event: KeyboardEvent) => {
//     setPressedKey(event.key);
//   });

//   return (
//     <div className="App">
//       {pressedKey ? (
//         <p className="App__message">
//           The last pressed key is [{pressedKey}]
//         </p>) : (
//         <p className="App__message">
//           Nothing was pressed yet
//         </p>)
//       }
//     </div>
//   );
// };
