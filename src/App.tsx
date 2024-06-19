import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<{}, State> {
  state: Readonly<State> = { pressedKey: '' };

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ pressedKey: event.key });
  };

  componentDidMount(): void {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount(): void {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  render(): React.ReactNode {
    const { pressedKey } = this.state;

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

// solution with Functional Component
/* import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  const handleKeyup = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup);

    return () => {
      document.removeEventListener('keyup', handleKeyup);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
}; */
