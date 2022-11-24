import React, { Component } from 'react';

type State = {
  key: string
};

type Props = {};

export class App extends Component<Props, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleBtnClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleBtnClick);
  }

  handleBtnClick = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });
  };

  render(): React.ReactNode {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
