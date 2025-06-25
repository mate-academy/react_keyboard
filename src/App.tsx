import React from 'react';

interface AppState {
  pressedKey: string | null;
}

export class App extends React.Component<{}, AppState> {
  state: AppState = {
    pressedKey: null,
  };

  constructor(props: {}) {
    super(props);

    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  handleKeyUp(event: KeyboardEvent) {
    this.setState({ pressedKey: event.key });
  }

  render() {
    const { pressedKey } = this.state;

    const message =
      pressedKey === null
        ? 'Nothing was pressed yet'
        : `The last pressed key is [${pressedKey}]`;

    return (
      <div
        className="min-h-screen flex
        items-center justify-center bg-gray-100 p-4"
      >
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <p className="text-2xl font-semibold text-gray-800">{message}</p>
        </div>
      </div>
    );
  }
}
