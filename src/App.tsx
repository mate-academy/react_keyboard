import React from 'react';

export class App extends React.Component {
  state = {
    Enter: '',
  };

  handlerKeyUp = (event: KeyboardEvent) => {
    this.setState({ Enter: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handlerKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlerKeyUp);
  }

  render() {
    const { Enter } = this.state;

    return (
      <div className="App">
        {Enter ? (
          <p className="App__message">The last pressed key is [{Enter}]</p>
        ) : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
      </div>
    );
  }
}
