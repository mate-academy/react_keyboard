import React from 'react';

export class App extends React.Component {
  state = {
    key: undefined,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyUpFunction);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyUpFunction);
  }

  keyUpFunction = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const {
      key,
    } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed'}
        </p>
      </div>
    );
  }
}
