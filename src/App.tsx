import React from 'react';

type Props = {};

type State = {
  keyValue: string;
};

export class App extends React.PureComponent<Props, State> {
  state: State = {
    keyValue: '',
  };

  componentDidMount() : void {
    document.addEventListener('keyup', this.handleDocumentClick);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleDocumentClick);
  }

  handleDocumentClick = (event: KeyboardEvent) => {
    this.setState({ keyValue: event.key });
  };

  render() {
    const { keyValue } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {keyValue
            ? `The last pressed key is [${keyValue}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}
