import { Component } from 'react';

type State = {
  click: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    click: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ click: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            !this.state.click ? ('Nothing was pressed yet')
              : (`The last pressed key is [${this.state.click}]`)
          }
        </p>
      </div>
    );
  }
}
