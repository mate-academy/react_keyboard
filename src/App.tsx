import React from 'react';
// import classNames from 'classnames';

type Props = {
};

type State = {
  pressedKey: string;
};

export class App extends React.Component<Props, State> {
  state = {
    pressedKey: '',
  };

  componentDidMount(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', (event: KeyboardEvent) => {
      this.setState({ pressedKey: event.key });
    });
  }

  render() {
    const { pressedKey } = this.state;

    // pressedKey = 'AAA';

    return (
      <div className="App">
        <p className="App__message">
          {pressedKey
            ? `The last pressed key is [${pressedKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

// export const App2: React.FC = () => (
//   <div className="App">
//     <p className="App__message">The last pressed key is [Enter]</p>
//   </div>
// );
