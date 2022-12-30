import { Component } from 'react';

type State = {
  key: string | null,
};

export class App extends Component<{}, State> {
  state : Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div>
        {
          key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'
        }
      </div>
    );
  }
}
