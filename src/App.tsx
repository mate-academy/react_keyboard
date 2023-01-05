import React from 'react';

import 'bulma/css/bulma.css';

type State = {
  message: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    message: 'Nothing was pressed yet',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  render() {
    const { message } = this.state;

    return (
      <div className="App button">
        <p className="App__message notification is-info is-light">
          {message}
        </p>
      </div>
    );
  }
}
