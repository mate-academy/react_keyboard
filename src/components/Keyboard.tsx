import React from 'react';

type State = {
  value: string;
};

export class Keyboard extends React.Component {
  state: State = {
    value: '',
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyboard);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyboard);
  }

  handleKeyboard = (event: KeyboardEvent) => {
    this.setState({ value: event.key });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="App">
        {value.length === 0 ? (
          <p className="App__message">Nothing was pressed yet</p>
        ) : (
          <p className="App__message">The last pressed key is {`[${value}]`}</p>
        )}
      </div>
    );
  }
}
