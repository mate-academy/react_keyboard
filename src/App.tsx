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
    return (
      <>
        {
          this.state.key
            ? (
              <div>
                {`The last pressed key is ${this.state.key}`}
              </div>
            )
            : (
              <div>
                Nothing was pressed yet
              </div>
            )
        }
      </>
    );
  }
}
