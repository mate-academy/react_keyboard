import React from 'react';

export class App extends React.PureComponent {
  state = {
    keyup: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyPressHandle);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyPressHandle);
  }

  keyPressHandle = (event: KeyboardEvent) => {
    this.setState({ keyup: event.key });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyup ? (
            `The last pressed key is [${this.state.keyup}]`
          ) : (
            'Nothing was pressed yet'
          )}
        </p>
      </div>
    );
  }
}
