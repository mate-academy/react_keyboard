import { Component, ReactNode } from 'react';

type StateType = {
  message: string;
};

export class Key extends Component<{}, StateType> {
  state = {
    message: 'Nothing was pressed yet',
  };

  // eslint-disable-next-line react/sort-comp
  handelDocumentKeyClick = (event: KeyboardEvent) => {
    this.setState({ message: `The last pressed key is [${event.key}]` });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handelDocumentKeyClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handelDocumentKeyClick);
  }

  render(): ReactNode {
    return (
      <p className="App__message">
        {this.state.message}
      </p>
    );
  }
}
