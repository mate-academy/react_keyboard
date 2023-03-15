import { Component, ReactNode } from 'react';

type State = {
  key: string,
};

export class Keyboard extends Component<{}, State> {
  state: Readonly<State> = {
    key: '',
  };

  componentDidMount() {
    document.addEventListener('keyup', this.keySaver);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.keySaver);
  }

  keySaver = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render(): ReactNode {
    const { key } = this.state;

    return (
      key
        ? `The last pressed key is [${key}]`
        : 'Nothing was pressed yet'
    );
  }
}
