import React from 'react';

interface State {
  title: string;
  value: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    title: 'Nothing was pressed yet',
    value: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
    this.setState({ title: 'Nothing was pressed yet' });
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({
      value: event.key,
      title: 'The last pressed key is',
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.value
            ? `The last pressed key is [${this.state.value}]`
            : 'Nothing was pressed yet'}
          {/* `{this.state.title} {this.state.value}` */}
        </p>
      </div>
    );
  }
}
