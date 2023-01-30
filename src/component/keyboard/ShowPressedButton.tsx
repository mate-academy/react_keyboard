import React from 'react';

type State = {
  key: string | null;
};

export class ShowPressedButton extends React.Component {
  state: Readonly<State> = {
    key: null,
  };

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyup);
  }

  handleKeyup = (event: KeyboardEvent) => {
    this.setState({ key: event.key });
  };

  render() {
    return (
      <p className="App__message">
        {
          this.state.key
            ? `The last pressed key is [${this.state.key}]`
            : 'Nothing was pressed yet'
        }
      </p>
    );
  }
}
