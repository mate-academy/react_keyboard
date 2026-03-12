import React from 'react';

type Props = {};
type State = {
  pressedKey: string | null;
};

export class App extends React.Component<Props, State> {
  state: State = {
    pressedKey: null,
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render(): JSX.Element {
    const { pressedKey } = this.state;

    return (
      <div className="App">
        <div className="App__message">
          {pressedKey === null
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${pressedKey}]`}
        </div>
      </div>
    );
  }
}

/*export const App: React.FC = () => (
  <div className="App">
    <p className="App__message">The last pressed key is [Enter]</p>
  </div>
);*/
