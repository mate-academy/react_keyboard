import { Component } from 'react';

type State = {
  key: string;
};

class ClassType extends Component<{}, State> {
  state: State = {
    key: '',
  };

  componentDidMount(): void {
    document.addEventListener('keyup', this.handlePressedKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.handlePressedKey);
  }

  handlePressedKey = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    const { key } = this.state;

    return (
      <div className="App">
        <p className="App__message">
          {key === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${key}]`}
        </p>
      </div>
    );
  }
}

export default ClassType;
