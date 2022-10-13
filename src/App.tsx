import { Component } from 'react';

type State = {
  key: string | null
};

export class App extends Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keyPress);
  }

  keyPress = (e: KeyboardEvent) => {
    this.setState({
      key: e.key,
    });
  };

  render() {
    const { key } = this.state;

    return (
      <div>
        {key
          ? `The last pressed key is ${key}`
          : 'Nothing was pressed yet'}
      </div>
    );
  }
}
