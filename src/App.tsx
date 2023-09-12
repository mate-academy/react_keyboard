import React from 'react';

type Props = {};
type State = {
  text: string;
};

export class App extends React.Component<Props, State> {
  state = {
    text: '',
  };

  componentDidMount(): void {
    this.handleState();
  }

  componentDidUpdate(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleState = () => {
    this.setState({
      text: 'Nothing was pressed yet',
    });
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({
      text: `The last pressed key is [${event.key}]`,
    });
  };

  render() {
    return (
      <div className="App">
        <p className="App__message">{this.state.text}</p>
      </div>
    );
  }
}
