import { Component } from 'react';

type Props = {
  button: string;
};

export class App extends Component<{}, Props> {
  state: Props = {
    button: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleButtonPress);
  }

  handleButtonPress = (event: KeyboardEvent) => {
    this.setState({ button: event.key});
  };

  componentUnmount() {
    document.removeEventListener('keyup', this.handleButtonPress);
  }

  render() {
    const { button } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {!button
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${button}]`}
        </p>
      </div>
    );
  }
}

// export const App: React.FC = () => (
//   <KeyboardKeys />
// );
