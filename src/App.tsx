import React from 'react';

type State = {
  button: string,
  pressed: boolean,
};

export class App extends React.Component<{}, State> {
  state = {
    button: '',
    pressed: false,
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.pressbutton);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.pressbutton);
  }

  pressbutton = (event: KeyboardEvent) => {
    this.setState({ button: event.key, pressed: true });
  };

  render() {
    const { button, pressed } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressed
            ? `The last pressed key is [${button}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
