import { PureComponent } from 'react';

export class App extends PureComponent {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.onKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.onKeyPress);
  }

  onKeyPress = (event: KeyboardEvent): void => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p
          className="App__message"
        >
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
