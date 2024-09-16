import React, { Component } from 'react';

type State = {
  pushed: string;
};

export class App extends Component<{}, State> {
  state: Readonly<State> = {
    pushed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pushKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pushKey);
  }

  pushKey = (event: KeyboardEvent) => {
    this.setState({
      pushed: event.key,
    });
  };

  render(): React.ReactNode {
    const { pushed } = this.state;

    return (
      // eslint-disable-next-line react/jsx-wrap-multilines
      <div className="App">
        <p className="App__message">
          {pushed === '' ? 'Nothing was pressed yet' : `The last pressed key is [${pushed}]`}
        </p>
      </div>);
  }
}
