import React from 'react';

export class App extends React.Component {
  state = {
    text: 'Nothing was pressed yet',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ text: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <p className="App__message">{text}</p>
      </div>
    );
  }
}
