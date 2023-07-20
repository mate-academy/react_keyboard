import React from 'react';

export class App extends React.Component {
  state = {
    clickedKey: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  handleKeyClick = (event: KeyboardEvent) => {
    this.setState({ clickedKey: event.key });
  };

  render() {
    const { clickedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {clickedKey
            ? `The last pressed key is [${clickedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
