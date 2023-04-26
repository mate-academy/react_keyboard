import React from 'react';

type State = {
  key: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    key: false,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = () => {
    this.setState({ key: true });
  };

  render() {
    const condition = this.state.key;

    return (
      <div className="App">
        <p className="App__message">
          {condition
            ? 'The last pressed key is [Enter]'
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
