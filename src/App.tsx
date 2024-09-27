import React from 'react';

export class App extends React.Component {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyboarClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyboarClick);
  }

  handleKeyboarClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? (`The last pressed key is [${pressedKey}]`)
            : ('Nothing was pressed yet')}
        </p>
      </div>
    );
  }
}
