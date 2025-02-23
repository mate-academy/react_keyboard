import React from 'react';

type AppState = {
  pressedKey: string;
};

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: 'Nothing was pressed yet',
  };

  handlePress = (event: KeyboardEvent) => {
    const newMessage = `The last pressed key is [${event.key}]`;

    if (this.state.pressedKey !== newMessage) {
      this.setState({ pressedKey: newMessage });
    }
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePress);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

// import React, { useEffect, useState } from 'react';

// const message = 'Nothing was pressed yet';

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState(message);

//   useEffect(() => {
//     const handlePress = (event: KeyboardEvent) => {
//       setPressedKey(`The last pressed key is [${event.key}]`);
//     };

//     document.addEventListener('keyup', handlePress);

//     return () => {
//       document.addEventListener('keyup', handlePress);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <p className="App__message">{pressedKey}</p>
//     </div>
//   );
// };
