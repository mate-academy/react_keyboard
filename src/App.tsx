// import React, { useState, useEffect } from 'react';

// export const App: React.FC = () => {
//   const [lastKey, setLastKey] = useState<string>('');

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       setLastKey(event.key);
//     };

//     window.addEventListener('keyup', handleKeyDown);

//     return () => {
//       window.removeEventListener('keyup', handleKeyDown);
//     };
//   }, []);

//   if (lastKey.length === 0) {
//     return (
//       <div className="App">
//         <p className="App__message">Nothing was pressed yet</p>
//       </div>
//     );
//   }

//   return (
//     <div className="App">
//       <p className="App__message">The last pressed key is [{lastKey}]</p>
//     </div>
//   );
// };


import React from 'react';

type State = {
  lastKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    lastKey: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    const { lastKey } = this.state;

    if (lastKey.length === 0) {
      return (
        <div className="App">
          <p className="App__message">Nothing was pressed yet</p>
        </div>
      );
    }

    return (
      <div className="App">
        <p className="App__message">
          The last pressed key is [{lastKey}]
        </p>
      </div>
    );
  }
}
