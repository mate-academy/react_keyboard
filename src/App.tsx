import React from 'react';
import './index.scss';

type State = {
  key: string | null;
};

export class App extends React.Component<{}, State> {
  state = {
    key: null,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    const pressedKey = event.key;

    this.setState({
      key: pressedKey,
    });
  };

  render() {
    const { key } = this.state;
    let content;

    if (!key) {
      content = (
        <p>
          Nothing was pressed yet
        </p>
      );
    } else {
      content = (
        <p>
          The last pressed key is
          {' '}
          {key}
        </p>
      );
    }

    return (
      <div>
        { content }
      </div>
    );
  }
}
