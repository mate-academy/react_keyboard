import { Component } from 'react';

type State = {
  key: string
};

export class App extends Component<{}, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', ({ key }) => {
      this.setState({ key });
    });
  }

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            key
              ? `The last pressed key is [${key}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
