import { Component } from 'react';

type State = {
  event: string | null;
};

export class App extends Component<{}, State> {
  state = {
    event: null,
  };

  componentDidMount() {
    // console.log('This is component did mount');

    document.addEventListener('keyup', (e) => {
      // console.log(e); // 'a'
      // console.log(e.key); // 'a'
      this.setState({ event: e.key });
    });
  }

  componentWillUnmount() {
    const listener = (e: KeyboardEvent) => {
      this.setState({ event: e.key });
    };

    document.removeEventListener('keyup', listener);
    // console.log('this is component willUnMount');
  }

  render() {
    // console.log('this is render');

    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.event
              ? `The last pressed key is [${this.state.event}]`
              : 'Nothing was pressed yet'
          }

        </p>
      </div>
    );
  }
}
