import React from 'react';

type State = {
  keyName: string;
  changed: boolean;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    keyName: '',
    changed: false,
  };

  handleKeyDown = (e: KeyboardEvent) => {
    this.setState({
      keyName: e.key,
      changed: true,
    });
  };

  componentDidMount(): void {
    window.addEventListener('keydown', this.handleKeyDown);

    this.setState({
      keyName: 'Nothing was pressed yet',
    });
  }

  componentWillUnmount(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { keyName, changed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {changed
            ? `The last pressed key is [${keyName}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
