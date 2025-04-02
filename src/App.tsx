import { PureComponent } from 'react';

type State = {
  message: string;
};

export class App extends PureComponent {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  handleClick = (e: KeyboardEvent) => {
    this.setState({
      message: `The last pressed key is [${e.key}]`,
    });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  render() {
    const { message } = this.state;

    return (
      <div className="App">
        <p className="App__message">{message}</p>
      </div>
    );
  }
}
