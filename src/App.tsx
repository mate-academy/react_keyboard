// -----------------------------------Class component-----------------------------------
import React from 'react';

interface State {
  pressedKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        {pressedKey ? (
          <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}

// -----------------------------------Functional component-----------------------------------
// import React, { useEffect, useState } from 'react';

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState<string | null>(null);

//   useEffect(() => {
//     const handleKeyUp = (event: KeyboardEvent) => {
//       setPressedKey(event.key);
//     };

//     document.addEventListener('keyup', handleKeyUp);

//     return () => {
//       document.removeEventListener('keyup', handleKeyUp);
//     };
//   }, []);

//   return (
//     // <div className="App">
//     //   {pressedKey ? (
//     //     <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
//     //   ) : (
//     //     <p className="App__message">Nothing was pressed yet</p>
//     //   )}
//     // </div>
//     <div className="App">
//       <p className="App__message">
//         {pressedKey
//           ? `The last pressed key is [${pressedKey}]`
//           : 'Nothing was pressed yet'}
//       </p>
//     </div>
//   );
// };
