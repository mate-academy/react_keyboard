
import React from 'react';

interface State {
  pressedKey: string | null;
}
export class App extends React.Component<State> {
  state: State = {
  pressedKey: null,
  }
 handleKeyChange = (event: KeyboardEvent) => {
  this.setState({pressedKey: event.key});
 }
 componentDidMount() {
  document.addEventListener('keyup', this.handleKeyChange);
}
componentWillUnmount() {
  document.removeEventListener('keyup', this.handleKeyChange);
}

render(): JSX.Element {
 const { pressedKey } = this.state;

return (
  <div className="App">

    <p
      className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'
        }
        </p>
  </div>
)
}
}
