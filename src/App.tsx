import React from 'react';

type State = {
  pressedKey: boolean,
  userPressed: string,
};

export class Click extends React.Component<{}, State> {
  state: Readonly<State> = {
    pressedKey: false,
    userPressed: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    if (event.key) {
      const userPressed1 = event.key;

      this.setState({ userPressed: userPressed1 });
      this.setState({ pressedKey: true });
    }
  };

  render() {
    const { pressedKey, userPressed } = this.state;

    return (
      <>
        {
          !pressedKey
            ? <p>Nothing was pressed yet</p>
            : <p>{`The last pressed key is [${userPressed}]`}</p>
        }
      </>
    );
  }
}

export const App: React.FC = () => (

  <div className="App">
    <Click />
  </div>
);
