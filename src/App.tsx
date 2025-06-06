import React from 'react';

interface Props {
  lastKey: string;
}

export class App extends React.Component<Props, {}> {
  state: Props = {
    lastKey: '',
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    this.setState({ lastKey: event.key });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.lastKey
            ? `The last pressed key is [${this.state.lastKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
