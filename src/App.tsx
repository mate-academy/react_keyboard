import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   // const [currentKey, setCurrentKey] = useState('');

//   // useEffect(() => {
//   //   const hanndleDocKeyvoard = (event: KeyboardEvent) => {
//   //     setCurrentKey(event.key);
//   //   };

//   //   document.addEventListener('keydown', hanndleDocKeyvoard);

//   //   return () => {
//   //     document.removeEventListener('keydown', hanndleDocKeyvoard);
//   //   };
//   // }, []);

//   return (
//     <div className="App">
//       <p className="App__message">
//         {currentKey
//           ? `The last pressed key is [${currentKey}]`
//           : `Nothing was pressed yet`}
//       </p>
//     </div>
//   );
// };
