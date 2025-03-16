import React from 'react';

type State = {
  key: string;
};

type Props = {
  props?: null;
};

export class App extends React.Component<Props, State> {
  state: Readonly<State> = {
    key: '',
  };

  handleClick = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
    this.setState({ key: '' });
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : `Nothing was pressed yet`}
        </p>
      </div>
    );
  }
}
