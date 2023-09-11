import React from 'react';
import { AppMessage } from './component/AppMessage';

// import { State } from './types/State';

// export class App extends React.PureComponent<State> {
//   state: State = {
//     pressedKey: '',
//   };

//   componentDidMount(): void {
//     document.addEventListener('keyup', this.onKeyBoard);
//   }

//   componentWillUnmount(): void {
//     document.removeEventListener('keyup', this.onKeyBoard);
//   }

//   onKeyBoard = (event: KeyboardEvent) => {
//     this.setState({ pressedKey: event.key });
//   };

//   render() {
//     const { pressedKey } = this.state;

//     return (
//       <div className="App">
//         <p className="App__message">
//           {pressedKey
//             ? `The last pressed key is [${pressedKey}]`
//             : 'Nothing was pressed yet'}
//         </p>
//       </div>
//     );
//   }
// }
export const App: React.FC = () => (
  <div className="App">
    <AppMessage />
  </div>
);
