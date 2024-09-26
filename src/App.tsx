import React from 'react';

export class App extends React.PureComponent {
  state = {
    title: 'Nothing was pressed yet',
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyDown);
  }

  keyDown = (event: KeyboardEvent) => {
    this.setState({
      title: 'The last pressed key is ',
      key: `[${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.title}
          {this.state.key}
        </p>
      </div>
    );
  }
}
