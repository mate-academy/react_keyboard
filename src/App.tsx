import React from 'react';

type State = {
  text: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    text: 'Nothing was pressed yet',
  };

  UNSAFE_componentWillMount() {
    document.removeEventListener('keyup', this.handleClickButton);
  }

  componentDidMount() {
    this.handleClickButton();
  }

  handleClickButton() {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      this.setState({ text: `The last pressed key is [${event.key}]` });
    });
  }

  render() {
    const { text } = this.state;

    return (
      <div className="App">
        <p className="App__message">{text}</p>
      </div>
    );
  }
}
