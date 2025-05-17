
import React from 'react';

type Props = {
  enter?: string;
};

type State = {
  enter: string;
};

export class Message extends React.Component<Props, State> {
  state: State = {
    enter: '',
  };

  handleKeyUp = (event: KeyboardEvent) => {
    this.setState({ enter: event.key });
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp);
  }

  render() {
    return <p className="App__message">
      {
        this.state.enter === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${this.state.enter}]`
      }
    </p>;
  }
}
