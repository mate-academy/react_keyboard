import React from 'react';

type State = {
  key: string;
};

export class LastPressedKey2 extends React.PureComponent<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handleKeyPress);
    // console.log('componentWillUnmount LastPressedKey2');
  }

  handleKeyPress = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div>
        {!key ? (
          <p>Nothing was pressed yet</p>
        ) : (
          <p className="App__message">{`The last pressed key is [${key}]`}</p>
        )}
      </div>
    );
  }
}
