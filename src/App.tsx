import { Component } from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );

type Props = {

};

type State = {
  pressedKey: string
};

export class App extends Component<Props, State> {
  state: State = {
    pressedKey: '',
  };

  initialMessage = 'Nothing was pressed yet';

  updatedMessage = 'The last pressed key is';

  componentDidMount() {
    document.addEventListener('keyup', this.eventHandler);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.eventHandler);
  }

  eventHandler = (e: KeyboardEvent) => {
    this.setState({
      pressedKey: e.key,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey.length === 0
            ? this.initialMessage
            : `${this.updatedMessage} [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
