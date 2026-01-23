import React from 'react';

type State = {
  key: string;
  isPressed: boolean;
};

export class App extends React.Component {
  state: Readonly<State> = {
    key: '',
    isPressed: false,
  };

  hendleKeyup = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
      isPressed: true,
    });
  };

  componentDidMount() {
    window.addEventListener('keyup', this.hendleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.hendleKeyup);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.isPressed
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
