import React from 'react';

type State = {
  key: string | null,
};

export class App extends React.Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const condition = this.state.key;

    return (
      <div className="App">
        <p className="App__message">
          {condition
            ? `The last pressed key is [${condition}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
