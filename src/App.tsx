import React, { } from 'react';


type Props = {
  pressKey: string;
  oneRender: boolean;
}

export class App extends React.Component<Props> {
  state = {
    pressKey: '',
    oneRender: false,
  };

  componentDidMount() {
    document.addEventListener('keyup', this.pressKeyboard);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.pressKeyboard);
  }

  pressKeyboard = (event: KeyboardEvent) => {
    this.setState({ pressKey: event.key, oneRender: true })
  };

  render() {

    const { pressKey, oneRender } = this.state;

    return (
      <div className="App">
        <p
          className="App__message"
        >
          {oneRender
            ? `The last pressed key is [${pressKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
