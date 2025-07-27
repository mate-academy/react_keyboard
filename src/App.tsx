import React from 'react';

type State = {
  item: string;
};

export class App extends React.Component<{}, State> {
  state: State = {
    item: '',
  };

  handleKey = (event: KeyboardEvent) => {
    this.setState({ item: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKey);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKey);
  }

  render() {
    const { item } = this.state;

    return (
      <div className="App">
        {item.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is [{item}]</p>
        )}
      </div>
    );
  }
}
