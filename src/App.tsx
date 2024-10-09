import React from 'react';

type Props = {};

type State = {
  key: string;
};

export class App extends React.Component<Props, State> {
  state = {
    key: '',
  };

  handleAddKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleAddKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleAddKey);
  }

  render() {
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
