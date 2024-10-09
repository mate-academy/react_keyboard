import React from 'react';

type State = {
  keyup: string;
};

export class App extends React.Component {
  state: Readonly<State> = {
    keyup: '',
  };

  setKey = (event: KeyboardEvent) => {
    this.setState({ keyup: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.setKey);
  }

  componentWillUnmount() {
    removeEventListener('keyup', this.setKey);
  }

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyup.length
            ? `The last pressed key is [${this.state.keyup}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
