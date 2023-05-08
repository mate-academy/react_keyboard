import React from 'react';

type State = {
  info: string | null;
};

export class App extends React.Component <{}, State> {
  state = {
    info: null,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ info: event.key });
  };

  render() {
    const { info } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {info
            ? `The last pressed key is [${info}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
