import React from 'react';
// import { useEffect, useState } from 'react';

// #region ClassComponent
type State = {
  pressedKey: string | null;
};

export class App extends React.Component<State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">The last pressed key is [{pressedKey}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
// #endregion

// #region FunctionalComponent
// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState<string | null>(null);

//   useEffect(() => {
//     const handleKeyup = (event: KeyboardEvent) => {
//       setPressedKey(event.key);
//     };

//     document.addEventListener('keyup', handleKeyup);

//     return () => {
//       document.removeEventListener('keyup', handleKeyup);
//     };
//   }, []);

//   return (
//     <div className="App">
//       {pressedKey ? (
//         <p className="App__message">The last pressed key is [{pressedKey}]</p>
//       ) : (
//         <p className="App__message">Nothing was pressed yet</p>
//       )}
//     </div>
//   );
// };
// #endregion
