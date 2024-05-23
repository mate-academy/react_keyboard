import React from 'react';

export class App extends React.Component {
  state = {
    firstRender: true,
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressedKey);
  }

  pressedKey = (event: KeyboardEvent) => {
    this.setState({ firstRender: false, key: event.key });
  };

  render() {
    const { firstRender, key } = this.state;

    return (
      <div className="App">
        {firstRender
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${key}]`}</p>}
      </div>
    );
  }
}
