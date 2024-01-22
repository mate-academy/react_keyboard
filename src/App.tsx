import React from 'react';

type Props = {
  name?: string;
};

type State = {
  pressed: string,
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressed: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp = (event: KeyboardEvent): void => {
    this.setState({ pressed: event.key });
  };

  render() {
    const { pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressed ? `The last pressed key is [${pressed}]` : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
