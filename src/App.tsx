import React from 'react';

type Props = {};

type State = {
  key: string;
};

export class App extends React.Component<Props, State> {
  state = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyEvent);
  }

  handleKeyEvent = (event: KeyboardEvent) => {
    this.setState({
      key: event.key,
    });

    if (event.key === ' ') {
      this.setState({
        key: 'Space',
      });
    }
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key
            ? `The last pressed key is [${key}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
