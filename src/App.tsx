
import React from 'react';


type State = {
  pressKey: string | null;
}

export class App extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressKey: null,
  }

  handeleKeyUp = (event: KeyboardEvent) => {
    this.setState({pressKey: event.key})
  }

  componentDidMount(): void {
    document.addEventListener('keyup', this.handeleKeyUp);
  }


  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handeleKeyUp)
  }

  get messageText(): string {
    const { pressKey } = this.state;

    return pressKey === null
      ? 'Nothing was pressed yet'
      : `The last pressed key is [${pressKey}]`;
  }

  render() {

    return (
      <div className="App">
        <p className="App__message">{this.messageText}</p>
      </div>
    )
  }
}


