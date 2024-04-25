import React from 'react';

type Props = {};

type State = {
  key: string;
};

export class App extends React.Component<Props, State> {
  state = {
    key: '',
  };

  constructor() {
    super({});
    this.keyDown = this.keyDown.bind(this);
  }

  keyDown = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.keyDown);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.keyDown);
  }

  render(): React.ReactNode {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key.length === 0
            ? `Nothing was pressed yet`
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}
