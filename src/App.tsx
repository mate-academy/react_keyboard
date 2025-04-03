import React from 'react';

// export const App: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state: State = {
    pressedKey: '',
  };

  handleKeyup = (event: KeyboardEvent) => {
    //console.log(event.key);

    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyup);
  }

  render() {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`
          }
        </p>
      </div>
    );
  }
}
