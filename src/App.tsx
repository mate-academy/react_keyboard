import React from 'react';

export class App extends React.PureComponent {
  state = {
    key: 'nothing',
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (e: KeyboardEvent) => {
    this.setState({ key: e.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          { this.state.key === 'nothing'
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.key}]`
          }
        </p>
      </div>
    );
  }
}
