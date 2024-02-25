import React from 'react';

export class App extends React.PureComponent {
  state = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePress);
  }

  handlePress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    const press = key
      ? `The last pressed key is [${key}]`
      : 'Nothing was pressed yet';

    return (
      <div className="App">
        <p className="App__message">{press}</p>
      </div>
    );
  }
}
