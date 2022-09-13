import React from 'react';

type Props = {};

type State = {
  keyupButton: string;
};

export class Pressed extends React.Component<Props, State> {
  state: Readonly<State> = {
    keyupButton: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ keyupButton: event.key });
  };

  render() {
    return (
      <p className="App__message">
        {this.state.keyupButton
          ? `The last pressed key is [${this.state.keyupButton}]`
          : 'Nothing was pressed yet'}
      </p>
    );
  }
}

export const App: React.FC = () => (
  <div className="App">
    <Pressed />
  </div>
);
