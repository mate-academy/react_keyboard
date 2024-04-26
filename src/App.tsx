import React from 'react';

type State = {
  value: string;
};

export class App extends React.PureComponent<{}, State> {
  state: State = {
    value: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleChange);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleChange);
  }

  handleChange = (event: KeyboardEvent) => {
    this.setState({ value: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.value
            ? `The last pressed key is [${this.state.value}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
