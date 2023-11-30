import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleClick);
  }

  handleClick = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  render() {
    const { pressedKey } = this.state;
    let content;

    if (!pressedKey) {
      content = (
        <p>Nothing was pressed yet</p>
      );
    } else {
      content = (
        <p>
          The last pressed key is [
          {pressedKey}
          ]
        </p>
      );
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}
