import React from 'react';

// class component

export class App extends React.Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState(({ pressedKey: `The last pressed key is [${event.key}]` }));
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.pressedKey}</p>
      </div>
    );
  }
}

// functional component

// export const App: React.FC = () => {
//   const [char, setChar] = React.useState('');
//   const isFirstRender = React.useRef(true);

//   if (char) {
//     isFirstRender.current = false;
//   }

//   const handleKeyUp = (event: KeyboardEvent) => setChar(event.key);

//   document.addEventListener('keyup', handleKeyUp);

//   return (
//     <div className="App">
//       {!isFirstRender.current
//         ? (
//           <p className="App__message">
//             {`The last pressed key is [${char}]`}
//           </p>
//         ) : (
//           <p className="App__message">Nothing was pressed yet</p>
//         )}
//     </div>
//   );
// };
