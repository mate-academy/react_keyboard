import { PureComponent } from 'react';

type State = {
  pressedKey: string;
};

export class App extends PureComponent {
  state: Readonly<State> = {
    pressedKey: '',
  };

  handleDocumentKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentKeyup);
  }

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
