import React from 'react';

export class App extends React.Component {
  state = {
    currentKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keyupHendler);
  }

  keyupHendler = (event: KeyboardEvent) => {
    this.setState({ currentKey: event.key });
  };

  componenWillUnmount() {
    document.removeEventListener('keyup', this.keyupHendler);
  }

  render() {
    const { currentKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {currentKey
            ? `The last pressed key is [${currentKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
