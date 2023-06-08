import { Component } from 'react';

interface State {
  key: string;
}

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyboardHandler);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyboardHandler);
  }

  keyboardHandler = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return key
      ? (<p>{`The last pressed key is [${key}]`}</p>)
      : (<p>Nothing was pressed yet</p>);
  }
}
