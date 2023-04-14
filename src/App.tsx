import React from 'react';

type State = {
  wasPresed: boolean;
  keyPres: null | string;
};

export class App extends React.Component<{}, State> {
  state = {
    wasPresed: false,
    keyPres: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKey.bind(this));
  }

  componentWillUnmount(): void {
    document.addEventListener('keyup', this.handlePressKey.bind(this));
  }

  handlePressKey(e: KeyboardEvent) {
    this.setState({
      wasPresed: true,
      keyPres: e.key,
    });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {
            this.state.wasPresed
              ? `The last pressed key is [${this.state.keyPres}]`
              : 'Nothing was pressed yet'
          }
        </p>
      </div>
    );
  }
}
