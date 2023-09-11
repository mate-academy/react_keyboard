import React from 'react';
import { State } from '../types/State';

// type State = {
//   pressedKey: string,
// };

export class AppMessage extends React.Component {
  state: State = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyBoard);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyBoard);
  }

  onKeyBoard = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}

// export const App: React.FC = () => {
//   const [pressedKey, setPressedKey] = useState('');

//   const onKeyBoard = (event: KeyboardEvent) => {
//     setPressedKey(event.key);
//   };

//   useEffect(() => {
//     document.addEventListener('keyup', onKeyBoard);

//     return () => {
//       document.removeEventListener('keyup', onKeyBoard);
//     };
//   }, []);

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
