import { Component } from 'react';

type State = {
  previous: string,
};

export class App extends Component<{}, State> {
  state = {
    previous: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocClick);
  }

  handleDocClick = (ev: KeyboardEvent) => {
    this.setState({ previous: ev.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.previous
            ? `The last pressed key is [${this.state.previous}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
