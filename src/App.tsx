import { Component } from 'react';

export class App extends Component {
  state = {
    pressedKey: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: `The last pressed key is ${event.key}` });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">{pressedKey}</p>
      </div>
    );
  }
}

// export const App: React.FC = () => {
//   const [key, setKey] = useState('Nothing was pressed yet');

//   useEffect(() => {
//     document.addEventListener('keyup', (event: KeyboardEvent) => {
//       setKey(`The last pressed key is [${event.key}]`);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <p className="App__message">{key}</p>
//     </div>
//   );
// };
