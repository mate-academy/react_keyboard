// functional aproach solution

import React from 'react';

// import React, { useCallback, useEffect, useState } from 'react';

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState<string | null>(null);
//   const handleKeyPressed = useCallback((event: KeyboardEvent) => {
//     if (event.key !== pressedKey) {
//       setPressedKey(event.key);
//     }
//   }, [pressedKey]);

//   useEffect(() => {
//     document.addEventListener('keyup', handleKeyPressed);

//     return () => {
//       document.removeEventListener('keyup', handleKeyPressed);
//     };
//   }, [handleKeyPressed]);

//   return (
//     <div className="App">
//       <p className="App__message">
//         {pressedKey
//           ? `The last pressed key is [${pressedKey}]`
//           : 'Nothing was pressed yet'}
//       </p>
//     </div>
//   );
// };

type State = {
  pressedKey: string | null
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    pressedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPressed);
  }

  handleKeyPressed = (event: KeyboardEvent) => {
    if (event.key !== this.state.pressedKey) {
      this.setState({ pressedKey: event.key });
    }
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
