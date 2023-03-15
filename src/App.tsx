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
        {currentKey
          ? <p className="App__message">{`The last pressed key is [${currentKey}]`}</p>
          : <p>Nothing was pressed yet</p>}
      </div>
    );
  }
}
