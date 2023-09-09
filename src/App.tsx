import React from 'react';

type Props = any;

type State = {
  key: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  private handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): React.ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
