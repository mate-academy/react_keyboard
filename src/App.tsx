import { Component } from 'react';

export class App extends Component {
  state = {
    currentKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {
            currentKey
              ? `The last pressed key is [${currentKey}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
