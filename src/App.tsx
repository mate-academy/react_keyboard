import React from 'react';

type Props = {
  keyup: string;
};

export class App extends React.Component {
  state: Props = {
    keyup: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressKey);
  }

  handlePressKey = (event: KeyboardEvent) => {
    this.setState({ keyup: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.keyup
            ? `The last pressed key is [${this.state.keyup}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
