import React from 'react';

type State = {
  userPressed: string,
};

export class Click extends React.Component<{}, State> {
  state: Readonly<State> = {
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
      const pressedKey = event.key;

      this.setState({ userPressed: pressedKey });
    }
  };

  render() {
    const { userPressed } = this.state;

    return (
      <>
        {!userPressed
          ? <p className="App__message">Nothing was pressed yet</p>
          : <p className="App__message">{`The last pressed key is [${userPressed}]`}</p>}
      </>
    );
  }
}

export const App: React.FC = () => (

  <div className="App">
    <Click />
  </div>
);
