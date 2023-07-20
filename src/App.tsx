import React from 'react';

type State = {
  key: string,
};

export class App extends React.Component {
  state: State = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyboardClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboardClick);
  }

  handleKeyboardClick = (event: KeyboardEvent) => {
    const { key } = event;

    this.setState({ key });
  };

  render() {
    return (

      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
